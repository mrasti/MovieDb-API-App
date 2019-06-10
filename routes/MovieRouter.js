
const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");

router.get('/', controller.getTopFive);
router.get('/:id', controller.getById);
router.get('/title/:title', controller.getByTitle);
router.get('/:id/crew/', controller.getCrew);

router.post('/', controller.createNew);

router.put('/:id', controller.putMovie);
router.patch('/:id', controller.patchMovie);

router.delete('/:id', controller.deleteMovie);

module.exports = router