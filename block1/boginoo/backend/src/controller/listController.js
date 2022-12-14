const { response } = require("express");
const Lists = require("../models/list");

exports.getLists = async (req, res) => {
  const lists = await Lists.find();
  res.send(lists);
};

exports.createList = async (req, res) => {
  try {
    const list = req.body;
    const listData = await Lists.create(list);
    res.send(listData);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getLink = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const listData = await Lists.find({ short: id });
    res.send(listData[0]);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
