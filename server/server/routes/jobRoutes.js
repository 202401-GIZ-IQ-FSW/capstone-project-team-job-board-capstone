const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

// Route to create a new job
router.post("/job", jobController.createJob);
// Route to get all jobs
router.get("/jobs", jobController.getJobs);
// Route to delete all jobs and clear employer's postedJobs field
router.delete("/jobs", jobController.deleteJobs);

module.exports = router;
