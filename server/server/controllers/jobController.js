const Job = require("../models/Job");
const User = require("../models/User");
const mongoose = require("mongoose");


// Controller to create a new job
exports.createJob = async (req, res) => {
  const { title, description, location, salary, employer, category } = req.body;

  try {
    // Validate employer ID format
    if (!mongoose.Types.ObjectId.isValid(employer)) {
      return res.status(400).json({ error: "Invalid employer ID format" });
    }

    // Create the new job
    const newJob = new Job({
      title,
      description,
      location,
      salary,
      employer,
      category,
    });

    // Save the job to the database
    const savedJob = await newJob.save();

    // Update the employer's postedJobs field
    const updatedEmployer = await User.findByIdAndUpdate(
      employer,
      { $push: { "employerInfo.postedJobs": savedJob._id } },
      { new: true, useFindAndModify: false }
    );

    // Ensure employer exists
    if (!updatedEmployer) {
      await Job.findByIdAndDelete(savedJob._id); // Rollback job creation
      return res.status(404).json({ error: "Employer not found" });
    }

    // Respond with the created job and updated employer
    res.status(201).json({ job: savedJob, employer: updatedEmployer.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Controller to get all jobs with optional filters, pagination, and sorting
exports.getJobs = async (req, res) => {
	// Destructure query parameters from the request
	const {
		title,
		location,
		salary,
		category,
		employer,
		page = 1,
		limit = 10,
		sortBy = "createdAt",
		order = "desc",
	} = req.query;

	// Build a filter object based on the query parameters
	let filter = {};
	if (title)
		filter.title = { $regex: title, $options: "i" }; // case-insensitive match for title
	if (location)
		filter.location = { $regex: location, $options: "i" }; // case-insensitive match for location
	if (salary) filter.salary = salary; // exact match for salary
	if (category) filter.category = category; // exact match for category
	if (employer) filter.employer = employer; // exact match for employer

	// Pagination
	const pageNumber = parseInt(page, 10); // Convert page number to integer
	const pageSize = parseInt(limit, 10); // Convert page size to integer

	// Sorting
	const sortOrder = order === "asc" ? 1 : -1; // Determine sort order (1 for ascending, -1 for descending)
	const sortOptions = {}; // Initialize sort options object
	sortOptions[sortBy] = sortOrder; // Set the sort field and order

	try {
		// Fetch jobs from the database based on filters, pagination, and sorting
		const jobs = await Job.find(filter)
			.populate("employer", "username email employerInfo") // Populate employer field with username, email, and employerInfo
			.sort(sortOptions) // Apply sorting options
			.skip((pageNumber - 1) * pageSize) // Skip documents for pagination
			.limit(pageSize) // Limit the number of documents returned for pagination
			.lean(); // Convert documents to plain JavaScript objects

		// If no jobs are found, return a 404 status with a message
		if (jobs.length === 0) {
			return res
				.status(404)
				.json({ message: "No matching jobs found" });
		}

		// Get the total count of documents matching the filter
		const totalJobs = await Job.countDocuments(filter);

		// Respond with the jobs and pagination info
		res.status(200).json({
			jobs, // List of jobs
			pagination: {
				totalJobs, // Total number of jobs
				currentPage: pageNumber, // Current page number
				totalPages: Math.ceil(totalJobs / pageSize), // Total number of pages
			},
		});
	} catch (error) {
		// If there's an error, respond with a 400 status and the error message
		res.status(400).json({ error: error.message });
	}
};

// Controller to get a job by ID
exports.getJobById = async (req, res) => {
	const jobId = req.params.id;

	// Check if jobId is a valid ObjectId because id has a specific length
	if (!mongoose.Types.ObjectId.isValid(jobId)) {
		return res
			.status(400)
			.json({ error: "Invalid job ID format" });
	}

	try {
		const job = await Job.findById(jobId)
			.populate("employer", "username email employerInfo")
			.lean();
		if (!job) {
			return res
				.status(404)
				.send({ error: "Job not found" });
		}
		res.status(200).json(job);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getJobsByCategory = async (req, res) => {
	const category = req.params.category;
	try {
		const jobs = await Job.find({ category })
			.populate("employer", "username email employerInfo")
			.lean();
		if (jobs.length === 0) {
			return res
				.status(404)
				.json({ error: "No jobs found in this category" });
		}
		res.status(200).json(jobs);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Controller to delete a job by ID
exports.deleteJobById = async (req, res) => {
    const jobId = req.params.id;

    // Check if jobId is a valid ObjectId because id has a specific length
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ error: "Invalid job ID format" });
    }

    try {
        // Find the job to be deleted
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }

        // Delete the job
        await Job.findByIdAndDelete(jobId);

        // Update the employer's postedJobs field to remove the job reference
        await User.findByIdAndUpdate(
            job.employer,
            { $pull: { "employerInfo.postedJobs": jobId } },
            { new: true, useFindAndModify: false }
        );

        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Controller to update a job by ID
exports.updateJobById = async (req, res) => {
  const jobId = req.params.id;
  const { title, description, location, salary, employer, category } = req.body;

  // Check if jobId is a valid ObjectId because id has a specific length
  if (!mongoose.Types.ObjectId.isValid(jobId)) {
    return res.status(400).json({ error: "Invalid job ID format" });
  }

  try {
    // Find the job to be updated
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Update the job details
    job.title = title || job.title;
    job.description = description || job.description;
    job.location = location || job.location;
    job.salary = salary || job.salary;
    job.employer = employer || job.employer;
    job.category = category || job.category;

    // Save the updated job to the database
    const updatedJob = await job.save();

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


// Controller to delete all jobs and clear postedJobs field for all employers
exports.deleteJobs = async (req, res) => {
	try {
		await Job.deleteMany({});
		await User.updateMany(
			{ role: "employer" },
			{ $set: { "employerInfo.postedJobs": [] } }
		);
		res.status(200).json({
			message:
				"All jobs and employer's posted jobs deleted successfully",
		});
	} catch (error) {
		res
			.status(500)
			.json({ error: "Internal server error" });
	}
};

