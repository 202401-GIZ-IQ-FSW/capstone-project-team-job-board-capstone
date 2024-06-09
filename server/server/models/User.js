const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
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
			min: 8, // Minimum length of 8 characters
			match:
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Must contain at least one lowercase, one uppercase, one numeric digit, one special character, and be 8 or more characters long
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
			lowercase: true, // Converts email to lowercase
			validate: [
				validator.isEmail,
				"Please provide a valid email address",
			],
		},
		createdDate: { type: Date, default: Date.now },
		dateOfBirth: { type: Date, required: true },
		profileImage: {
			type: String,
		},
		gender: {
			type: String,
			enum: ["male", "female"],
			required: true,
		},
		role: {
			type: String,
			enum: ["JobSeeker", "Employer", "Admin"],
			required: true,
		},
	},
	{ discriminatorKey: "role" }
); // Discriminator key for differentiating document types

// Custom password validator
const passwordValidator = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    return passwordRegex.test(password);
};

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function(next) {
    // Hash the password if it's modified or new
    if (!this.isModified('password')) return next();

    // Ensure the password meets the complexity requirements
    if (!passwordValidator(this.password)) {
        return next(new Error('Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'));
    }

    // Hash the password
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("User", userSchema);
