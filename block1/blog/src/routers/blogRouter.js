const express = require("express");
const {
  getUsers,
  getUsersById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const blogRouter = express.Router();

blogRouter.get("/user/", getUsers);
blogRouter.get("/user/:id", getUsersById);
blogRouter.post("/user/create", createUser);
blogRouter.delete("/user/delete/:id", deleteUser);
blogRouter.put("/user/update/:id", updateUser);

module.exports = blogRouter;
