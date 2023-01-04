const express = require("express");
const {
  getLists,
  createList,
  getLink,
} = require("../controller/listController");

const listRouter = express.Router();

listRouter.get("/", getLists);
listRouter.post("/create", createList);
listRouter.get("/:id", getLink);

module.exports = listRouter;
