const { Schema, model } = require("mongoose");

// create Thoughts schema

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      minlength: 10,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
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
