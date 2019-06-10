
const express = require("express");
const router = express.Router();
const controller = require("../controllers/PeopleController");

router.get('/', controller.getTopFive);
router.get('/:name', controller.getByName)

module.exports = router