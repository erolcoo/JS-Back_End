const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    //TODO add/change properties depending on exam description
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = { User };
