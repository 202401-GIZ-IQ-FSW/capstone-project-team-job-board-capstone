const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Route to apply for a job
router.post('/apply', applicationController.applyJob);

// Route to get applications by job seeker ID
router.get('/job-seeker/:jobSeekerId', applicationController.getApplicationsByJobSeeker);

module.exports = router;
