const Job = require("../models/Job");
const User = require("../models/User");
const mongoose = require("mongoose");


// Controller to create a new job
exports.createJob = async (req, res) => {
	const {
		title,
		description,
		location,
		salary,
		employer,
		category,
	} = req.body;
	try {
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
            {
                $push: { "employerInfo.postedJobs": savedJob._id },
            },
            { new: true, useFindAndModify: false }
        );

		// Respond with the created job and updated employer
		res
			.status(201)
			.json({ job: savedJob, employer: updatedEmployer.username });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Controller to get all jobs
exports.getJobs = async (req, res) => {
	try {
		const jobs = await Job.find()
			.populate("employer", "username email employerInfo")
			.lean();
		res.status(200).json(jobs);
	} catch (error) {
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
