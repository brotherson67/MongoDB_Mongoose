const { Schema, model } = require("mongoose");

// combine reactions into this file
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

// create Thoughts schema

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      charNum,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts;
