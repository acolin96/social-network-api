const router = require('express').Router();
const { gatherThoughts, gatherOneThought, createThought, updateThought, deleteThought, addReaction } = require('../../controllers/thoughtController')

router.route('/').get(gatherThoughts).post(createThought);

router.route('/:thoughtId').get(gatherOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction)

module.exports = router;