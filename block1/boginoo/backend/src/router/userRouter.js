const express = require("express");
const {
  getUsers,
  createUsers,
  Login,
} = require("../controller/userController");
const authenticateToken = require("../middleware/authorization");

const userRouter = express.Router();

userRouter.get("/", authenticateToken, getUsers);
userRouter.post("/create", createUsers);
userRouter.post("/login", Login);

module.exports = userRouter;
