const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route to create a new user
router.post("/user", userController.createUser);
// Route to get all users
router.get("/users", userController.getUsers);
// Route to get a user by ID
router.get("/user/:id", userController.getUserById);
// Route to delete all users
router.delete("/users", userController.deleteUsers);
// Route to delete a user by ID
router.delete("/user/:id", userController.deleteUserById);

module.exports = router;
