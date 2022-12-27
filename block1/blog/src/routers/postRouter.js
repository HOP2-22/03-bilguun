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

postRouter.get("/", getList);
postRouter.get("/user/:id/", getListByUser);
postRouter.get("/tag/:id/", getListByTag);
postRouter.get("/:id", getPostById);
postRouter.post("/create", createPost);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);

module.exports = postRouter;
