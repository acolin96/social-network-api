const router = require('express').Router();
const { gatherThoughts, gatherOneThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController')

router.route('/').get(gatherThoughts).post(createThought);

router.route('/:thoughtId').get(gatherOneThought).put(updateThought).delete(deleteThought);

module.exports = router;