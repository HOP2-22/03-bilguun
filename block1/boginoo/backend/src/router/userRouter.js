const express = require("express");
const {
  getUsers,
  createUsers,
  Login,
} = require("../controller/userController");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create", createUsers);
userRouter.post("/login", Login);

module.exports = userRouter;
