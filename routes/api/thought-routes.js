const router = require("expres").Router();
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts route
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId route
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route("/thoughts/:thoughtId/reactions")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
