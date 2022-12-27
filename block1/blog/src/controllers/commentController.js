const { response } = require("express");
const Comments = require("../models/comment");

exports.getList = async (_request, response) => {
  const comments = await Comments.find();
  console.log(comments);
  response.status(200).send(comments);
};

exports.getListByPost = async (request, response) => {
  const _id = request.params.id;
  try {
    const comment = await Comments.find({
      post: _id,
    });
    response.send(comment);
  } catch (error) {
    response.status(400).send(error.message);
  }
};

exports.getListByUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const comment = await Comments.find({
      owner: _id,
    });
    res.send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.createComment = async (req, res) => {
  const comment = req.body;
  try {
    const commentData = await Comments.create(comment);
    res.send(commentData);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteComment = async (req, res) => {
  const _id = req.params.id;
  try {
    await Comments.findByIdAndDelete({ _id });
    res.send({ message: "comment deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
