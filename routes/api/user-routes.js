const router = require("expres").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// /api/users route
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId route
router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId route
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
