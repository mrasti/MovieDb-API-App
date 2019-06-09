
const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");

router.get('/', controller.getTopFive);
router.get('/:id', controller.getById);
router.get('/title/:title', controller.getByTitle);

router.post('/', controller.createNew);


module.exports = router