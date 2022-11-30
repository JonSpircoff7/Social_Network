const { Schema, model } = require("mongoose");

const userSchema = new Scheme(
  {
    username: {},
    email: {},
    thoughts: [{}],
    friends: [{}],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual for friendCOunt

const User = model("User", userSchema);

module.exports = User;
