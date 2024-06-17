const Job = require("../models/Job");
const User = require("../models/User");

// Controller to create a new job
exports.createJob = async (req, res) => {
	const { title, description, location, salary, employer } =
		req.body;
	try {
		// Create the new job
		const newJob = new Job({
			title,
			description,
			location,
			salary,
			employer,
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
		res.status(200).send(jobs);
	} catch (error) {
		res.status(400).send({ error: error.message });
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
		res
			.status(200)
			.send({
				message:
					"All jobs and employer's posted jobs deleted successfully",
			});
	} catch (error) {
		res
			.status(500)
			.send({ error: "Internal server error" });
	}
};
