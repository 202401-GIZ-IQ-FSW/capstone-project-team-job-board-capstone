const mongoose = require("mongoose");
const User = require("./User");

const jobSeekerSchema = new mongoose.Schema({
	skills: [{ type: String }],
	jobTitle: { type: String },
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


module.exports = User.discriminator(
	"JobSeeker",
	jobSeekerSchema
);
