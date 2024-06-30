const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

// Route to create a new job
router.post("/job", jobController.createJob);

// Route to get all jobs with optional filters
router.get("/jobs", jobController.getJobs);

// Route to get a job by ID
router.get("/job/:id", jobController.getJobById);

// Route to get jobs by category
router.get("/jobs/category/:category", jobController.getJobsByCategory);

//Route to delete a job by ID
router.delete("/job/:id", jobController.deleteJobById);

//Route to edit a job by ID
router.put("/job/:id", jobController.updateJobById);

// Route to delete all jobs and clear employer's postedJobs field
router.delete("/jobs", jobController.deleteJobs);

module.exports = router;
