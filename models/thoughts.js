const { Schema, model } = require("mongoose");

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
    reactions: [{ ref: "reaction" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts;
