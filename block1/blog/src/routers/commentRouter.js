const express = require("express");
const {
  getListByUser,
  getList,
  getListByPost,
  createComment,
  deleteComment,
} = require("../controllers/commentController");

const commentRouter = express.Router();

commentRouter.get("/", getList);
commentRouter.get("/post/:id", getListByPost);
commentRouter.get("/user/:id", getListByUser);
commentRouter.post("/create", createComment);
commentRouter.delete("/:id", deleteComment);

module.exports = commentRouter;
