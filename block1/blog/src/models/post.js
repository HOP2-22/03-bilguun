const mongoose = require("mongoose");
const Users = require("./user");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String },
  likes: { type: Number, default: 0 },
  link: { type: String },
  tags: { type: Array },
  publishDate: { type: Date, default: new Date() },
  owner: Users,
});

const Posts = mongoose.model("users", PostSchema);

module.exports = Posts;
