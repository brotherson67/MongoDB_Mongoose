const router = require("express").Router();

const {
  deleteUser,
  updateUser,
  createUser,
  getUserById,
} = require("../../controllers/user-controllers");

router.route("/").post(createUser);

router.route("/:id").put(updateUser).get(getUserById).delete(deleteUser);

module.exports = router;
