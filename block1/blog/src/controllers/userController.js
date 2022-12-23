const Users = require("../models/user");

exports.getUsers = async (request, response) => {
  const users = await Users.find();
  response.send(users);
};

exports.getUsersById = async (request, response) => {
  const { id } = request.params;
  try {
    const user = await Users.findById(id);
    response.send(user);
  } catch (err) {
    response.status(400).send(err.message);
  }
};

exports.createUser = async (request, response) => {
  const user = request.body;
  try {
    const userData = await Users.create(user);
    response.send(userData);
  } catch (error) {
    response.status(400).send(error.message);
  }
};

exports.deleteUser = async (request, response) => {
  const _id = request.params.id;
  try {
    await Users.findByIdAndDelete({ _id });
    response.send({ message: "Delete" });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

exports.updateUser = async (request, response) => {
  const _id = request.params.id;
  const updatedUser = request.body;
  try {
    await Users.findByIdAndUpdate({ _id }, updatedUser);
    response.send({ message: "Updated" });
  } catch (error) {
    response.status(400).send(error.message);
  }
};
