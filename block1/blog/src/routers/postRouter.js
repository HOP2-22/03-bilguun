const express = require("express");
const {
  getList,
  getListByUser,
  getListByTag,
  getPostById,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const postRouter = express.Router();

postRouter.get("/post/", getList);
postRouter.get("/user/:id/post", getListByUser);
postRouter.get("/tag/:id/post", getListByTag);
postRouter.get("/post/:id", getPostById);
postRouter.post("/post/create", createPost);
postRouter.delete("/post/:id", deletePost);
postRouter.put("/post/:id", updatePost);

module.exports = postRouter;
