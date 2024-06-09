const mongoose = require("mongoose");
const User = require("./User");

const employerSchema = new mongoose.Schema({
	description: { type: String, required: true },
	location: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	postedJobs: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Job" },
	],
});

module.exports = User.discriminator(
	"Employer",
	employerSchema
);
