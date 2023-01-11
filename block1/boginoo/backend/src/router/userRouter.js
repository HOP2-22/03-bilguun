const express = require("express");
const {
  getUsers,
  createUsers,
  Login,
} = require("../controller/userController");

const { authenticate } = require("../middleware/authorization");

const userRouter = express.Router();
const middleware = (req, res, next) => {
  const ticket = req.body.ticket;
  if (ticket) {
    next();
  } else {
    res.status(400).json({
      message: "Invalid ticket",
    });
  }
};

userRouter.get("/", authenticate, getUsers);
userRouter.post("/create", createUsers);
userRouter.post("/login", Login);

module.exports = userRouter;
