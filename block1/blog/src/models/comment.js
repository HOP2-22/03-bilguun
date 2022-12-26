const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  id: { type: String },
  message: { type: String },
  // owner: {}
  post: { type: String },
  publishDate: { type: Date, default: new Date() },
});

const Comments = mongoose.model("comments", commentSchema);

module.exports = Comments;
