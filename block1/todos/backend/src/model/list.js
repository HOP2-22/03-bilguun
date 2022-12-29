const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: { type: String },
  description: { type: String },
});

const Lists = mongoose.model("lists", ListSchema);

module.exports = Lists;
