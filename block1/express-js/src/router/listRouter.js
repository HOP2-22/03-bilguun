const { Router } = require("express");
const express = require("express");
const { getLists } = require("../controller/listController");

const router = Router();
router.get("/", getLists);
module.exports = router;
