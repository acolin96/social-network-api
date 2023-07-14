const router = require('express').Router();
const { getAllUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend)

module.exports = router;