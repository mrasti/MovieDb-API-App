
const express = require("express");
const router = express.Router();
const controller = require("../controllers/CrewController");

router.get('/api/crew/', controller.getAll);

module.exports = router