const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema({
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    jobSeeker: {
        type: Schema.Types.ObjectId,
        ref: "JobSeeker",
        required: true,
    },
    status: {
        type: String,
        enum: ["applied", "interview", "hired", "rejected"],
        default: "applied",
    },
    appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
    "Application",
    applicationSchema
);