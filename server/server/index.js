const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

require("dotenv").config();

const connectToMongo = require("./db/connection");

const app = express();
const port =
	process.env.NODE_ENV === "test"
		? process.env.NODE_LOCAL_TEST_PORT
		: process.env.NODE_LOCAL_PORT;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(userRoutes);
app.use(jobRoutes);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
	connectToMongo();
});

module.exports = app;
