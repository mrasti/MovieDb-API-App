
const express = require("express");
const router = express.Router();
const controller = require("../controllers/PeopleController");

router.get('/api/people/', controller.getAll);

module.exports = router