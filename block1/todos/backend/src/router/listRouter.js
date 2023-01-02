const express = require("express");
const {
  getLists,
  createList,
  deleteList,
  updateList,
} = require("../controller/listController");
const listRouter = express.Router();

listRouter.get("/", getLists);
listRouter.post("/create", createList);
listRouter.delete("/:id", deleteList);
listRouter.put("/update/:id", updateList);
module.exports = listRouter;
