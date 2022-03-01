const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  removeThought,
  addReaction,
} = require("../../controllers/thought-controllers");

router.route("/").post(addThought).get(getAllThoughts);

router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

router.route("/:id/reactions").post(addReaction);

module.exports = router;
