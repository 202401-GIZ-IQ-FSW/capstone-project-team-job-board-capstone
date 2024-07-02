const User = require("../models/User");

// Controller to create a new user
exports.createUser = async (req, res) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.status(201).send(newUser);
	} catch (error) {
		console.log("Error:", error);
		res.status(400).send({ error: error.message });
	}
};

// Controller to get all users with relevant field population based on roles
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find()
			.lean()
			.select("-password");

		// Populate fields based on user's roles
		await User.populate(users, [
			{
				path: "employerInfo.postedJobs",
				select: "title description location salary",
				match: { role: "employer" },
			},
		]);

		res.status(200).send(users);
	} catch (error) {
		console.log("Error:", error);
		res.status(400).send({ error: error.message });
	}
};


// Controller to get a user by ID
exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
			.lean()
			.select("-password");

		if (!user) {
			return res.status(404).send({ error: "User not found" });
		}

		// Populate fields based on user's roles
		await User.populate(user, [
			{
				path: "employerInfo.postedJobs",
				select: "title description location salary",
				match: { role: "employer" },
			},
		]);

		res.status(200).send(user);
	} catch (error) {
		console.log("Error:", error);
		res.status(400).send({ error: error.message });
	}
};

// Controller to delete a user by ID
exports.deleteUserById = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);

		if (!user) {
			return res.status(404).send({ error: "User not found" });
		}

		res.status(200).send({ message: "User deleted successfully", user });
	} catch (error) {
		console.log("Error:", error);
		res.status(500).send({ error: "Internal server error" });
	}
};


// Controller to delete all users
exports.deleteUsers = async (req, res) => {
	try {
		await User.deleteMany({});
		res.status(200).send({ message: "All users deleted successfully" });
	} catch (error) {
		console.log("Error:", error);
		res.status(500).send({ error: "Internal server error" });
	}
};
