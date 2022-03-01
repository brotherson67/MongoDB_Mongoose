const { Schema, model } = require("mongoose");
const reaction = require("./reactions");

// create Thoughts schema

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    reactions: [reaction],
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
