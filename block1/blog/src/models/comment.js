const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: { type: String },
  owner: { type: String },
  post: { type: String },
  publishDate: { type: Date, default: new Date() },
});

const Comments = mongoose.model("comments", commentSchema);

module.exports = Comments;
