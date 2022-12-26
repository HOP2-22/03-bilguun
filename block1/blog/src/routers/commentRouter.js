const express = require("express");
const { getListByUser } = require("../controllers/postController");
const postRouter = require("./postRouter");

const commentRouter = express.Router();

commentRouter
  .get("/comment", getList)
  .get("/post/:id/comment", getListByPost)
  .get("/user/:id/comment", getListByUser)
  .post("/comment/create", createComment);
