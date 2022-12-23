const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  age: { type: Number },
});

const Users = mongoose.model("users", UserSchema);

module.exports = Users;
