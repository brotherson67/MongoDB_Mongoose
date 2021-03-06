const { users, thoughts } = require("../models");
const { find } = require("../models/users");

const thougthController = {
  // create thought
  addThought({ body }, res) {
    thoughts
      // below I may need to desture this to just body and add {body}where req is
      .create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(400).json(err));
  },

  // Get all request
  getAllThoughts(req, res) {
    thoughts
      .find({})
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404);
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get thougth by id
  getSingleThought({ params }, res) {
    thoughts
      .findOne({ _id: params.id })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "sorry that thought doesn't exist" });
          return;
        }
        res.json({ dbThoughtData });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //update thougth
  updateThought({ params, body }, res) {
    thoughts
      .findOneAndUpdate({ _id: params.id }, body, { new: true })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404);
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.staus(400).json(err));
  },

  // delete thought
  removeThought({ params }, res) {
    thoughts
      .findOneAndDelete({ _id: params.id })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message:
              "Sorry we couldn't delete that thought because it wasnt' there",
          });
          return;
        }
        res.json({ dbThoughtData });
      })
      .catch((err) => res.status(400).json(err));
  },

  // add reaction
  addReaction({ params, body }, res) {
    //I might need to add a plural reactions to the push part
    thoughts
      .findOneAndUpdate(
        { _id: params.id },
        { $push: { reactions: body } },
        { new: true }
      )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "sorry that thought doesn't exist" });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thougthController;
