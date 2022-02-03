const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  updateThought,
  removeThought,
} = require("../../controllers/thought-controllers");

router.route("/").post(addThought).get(getAllThoughts);

router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
