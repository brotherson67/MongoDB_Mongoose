import { Schema, model } from "mongoose";

// create user schema
const UserSchema = new Schema(
  {
    userName: {
      type: string,
    },
    password: {
      type: string,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
