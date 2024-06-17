const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route to create a new user
router.post("/user", userController.createUser);
// Route to get all users
router.get("/users", userController.getUsers);
// Route to delete all users
router.delete("/users", userController.deleteUsers);

module.exports = router;
