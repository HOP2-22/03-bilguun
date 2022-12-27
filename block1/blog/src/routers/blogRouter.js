const express = require("express");
const {
  getUsers,
  getUsersById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const blogRouter = express.Router();

blogRouter.get("/", getUsers);
blogRouter.get("/:id", getUsersById);
blogRouter.post("/create", createUser);
blogRouter.delete("/delete/:id", deleteUser);
blogRouter.put("/update/:id", updateUser);

module.exports = blogRouter;
