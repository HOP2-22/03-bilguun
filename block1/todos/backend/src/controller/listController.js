const Lists = require("../model/list");

exports.getLists = async (request, response) => {
  const lists = await Lists.find();
  response.send(lists);
};

exports.createList = async (request, response) => {
  const list = request.body;
  try {
    const listData = await Lists.create(list);
    response.send(listData);
  } catch (e) {
    response.status(400).send(error.message);
  }
};

exports.deleteList = async (request, response) => {
  const _id = request.params.id;
  try {
    await Lists.findByIdAndDelete({ _id });
    response.send({ message: "Deleted" });
  } catch (e) {
    response.status(400).send(error.message);
  }
};

exports.updateList = async (request, response) => {
  const _id = request.params.id;
  const updateedList = request.body;
  try {
    await Lists.findByIdAndUpdate({ _id }, updateedList);
    response.send({ message: "Updated" });
  } catch (error) {
    response.status(400).send(error.message);
  }
};
