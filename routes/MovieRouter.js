
const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");

router.get('/', controller.sayHi);
router.get('/api/movies/', controller.getAll);
router.get('/movies/title/:title', controller.getTitle);

module.exports = router