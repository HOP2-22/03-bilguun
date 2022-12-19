const app = require("../index.js");

const list = [
  {
    list: "Delguur yvah",
    detail: "sav, suu",
    isDone: "false",
  },
  {
    list: "Delguur yvah",
    detail: "sav, suu",
    isDone: "false",
  },
  {
    list: "Delguur yvah",
    detail: "sav, suu",
    isDone: "false",
  },
  {
    list: "Delguur yvah",
    detail: "sav, suu",
    isDone: "false",
  },
  {
    list: "Delguur yvah",
    detail: "sav, suu",
    isDone: "false",
  },
];

exports.getLists = (req, res) => {
  res.send(list);
};
