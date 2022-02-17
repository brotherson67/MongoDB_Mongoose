const { Schema } = require("mongoose");

const reactionSchema = newSchema(
  {
    _id: {
      type: ID,
    },
    reactionBody: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {}
);
