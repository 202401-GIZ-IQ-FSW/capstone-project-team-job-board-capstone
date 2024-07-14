const Application = require("../models/Application");
const User = require("../models/User");
const Job = require("../models/Job");

exports.applyJob = async (req, res) => {
    try {
        const { jobId, jobSeekerId, coverLetter } = req.body;

        // Ensure the job and user exist
        const job = await Job.findById(jobId);
        const user = await User.findById(jobSeekerId);

        if (!job || !user) {
            return res.status(404).send({ error: "Job or Job Seeker not found" });
        }

        // Create a new application
        const newApplication = new Application({
            job: jobId,
            jobSeeker: jobSeekerId,
            coverLetter
        });

        await newApplication.save();

        // Add the application to the job seeker's applications array
        user.jobSeekerInfo.applications.push(newApplication._id);
        await user.save();

        res.status(201).send(newApplication);
    } catch (error) {
        console.log("Error:", error);
        res.status(400).send({ error: error.message });
    }
};

// Controller to get applications by job seeker ID
exports.getApplicationsByJobSeeker = async (req, res) => {
    try {
        const jobSeekerId = req.params.jobSeekerId;
        const applications = await Application.find({ jobSeeker: jobSeekerId })
            .populate('job', 'title description location salary')
            .lean();

        if (!applications.length) {
            return res.status(404).send({ error: "No applications found for this job seeker" });
        }

        res.status(200).send(applications);
    } catch (error) {
        console.log("Error:", error);
        res.status(400).send({ error: error.message });
    }
};
