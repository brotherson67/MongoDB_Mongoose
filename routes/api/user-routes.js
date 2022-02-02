const router = require("express").Router();

const {
  getUser,
  deleteUser,
  updateUser,
  createUser,
  getUserById,
} = require("../../controllers/user-controllers");

router.route("/").post(createUser).get(getUser);

router.route("/:id").put(updateUser).get(getUserById).delete(deleteUser);

module.exports = router;
