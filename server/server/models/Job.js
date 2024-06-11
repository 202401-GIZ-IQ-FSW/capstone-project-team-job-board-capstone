const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	location: { type: String, required: true },
	salary: { type: Number },
	employer: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	applications: [
		{ type: Schema.Types.ObjectId, ref: "Application" },
	],
});

module.exports = mongoose.model("Job", jobSchema);