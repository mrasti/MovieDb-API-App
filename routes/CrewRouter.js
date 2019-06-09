
const express = require("express");
const router = express.Router();
const controller = require("../controllers/CrewController");

router.get('/', controller.getTopFive);

module.exports = router