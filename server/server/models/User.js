const mongoose = require("mongoose");
const { Schema } = mongoose;

const employerSchema = new Schema({
	description: { type: String, required: true },
	location: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	postedJobs: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Job" },
	],
});

const jobSeekerSchema = new Schema({
	skills: [{ type: String }],
	jobTitle: {
		type: String,
		required: true,
	},
	workExperience: [
		{
			company: String,
			position: String,
			startDate: Date,
			endDate: Date,
			description: String,
		},
	],
	education: [
		{
			institution: String,
			degree: String,
			startDate: Date,
			endDate: Date,
		},
	],
	applications: [
		{ type: Schema.Types.ObjectId, ref: "Application" },
	],
});

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		min: [3, "Minimum is 3 letters"],
		max: 12,
	},
	password: {
		type: String,
		required: true,
		min: 8,
		match:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
		lowercase: true,
	},
	createdDate: { type: Date, default: Date.now },
	dateOfBirth: { type: Date, required: true },
	profileImage: String,
	gender: {
		type: String,
		enum: ["male", "female"],
		required: true,
	},
	role: {
		type: String,
		enum: ["jobSeeker", "employer", "admin"],
		required: true,
	},
 employerInfo: {
    type: employerSchema,
    validate: {
      validator: function (value) {
        if (this.role === "employer") {
          return value !== null;
        } else {
          return value === null;
        }
      },
    },
  },
  jobSeekerInfo: {
    type: jobSeekerSchema,
    validate: {
      validator: function (value) {
        if (this.role === "jobSeeker") {
          return value !== null;
        } else {
          return value === null;
        }
      },
    },
  },
});

module.exports = mongoose.model("User", userSchema);
