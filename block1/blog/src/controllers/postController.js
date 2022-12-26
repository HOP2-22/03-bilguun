const Posts = require("../models/post");
//finished
exports.getList = async (request, response) => {
  const posts = await Posts.find();
  response.send(posts);
};

exports.getListByUser = async (request, response) => {};

exports.getListByTag = async (request, response) => {
  const tag = request.params.id;
  try {
    const posts = await Posts.find();
    posts.map((post) => {
      for (let i = 0; i < post.tags.length; i++) {
        if (tag == post.tags[i]) {
          return response.send(post);
        }
      }
    });
  } catch (error) {}
};
//finished
exports.getPostById = async (request, response) => {
  const _id = request.params.id;
  try {
    const post = await Posts.findById(_id);
    response.send(post);
  } catch (error) {
    response.status(400).send(error.message);
  }
};
//finished
exports.createPost = async (request, response) => {
  const post = request.body;
  try {
    const postData = await Posts.create(post);
    response.send(postData);
  } catch (error) {
    response.status(400).send(error.message);
  }
};

exports.deletePost = async (request, response) => {
  const _id = request.params.id;
  try {
    await Posts.findByIdAndDelete({ _id });
    response.send({ message: "Deleted" });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

exports.updatePost = async (request, response) => {
  const _id = request.params.id;
  const updatedPost = request.body;
  try {
    await Posts.findByIdAndUpdate({ _id }, updatedPost);
    response.send({ message: "Updated" });
  } catch (error) {
    response.status(400).send(error.message);
  }
};
