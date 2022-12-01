const { Schema, model } = require("mongoose");

const userSchema = new Scheme(
  {
    username: {
      type: String,
      required: true,
      min_length: 8,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 45,
      unique: true,
      match: (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm"),
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual for friendCOunt

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Users = model("User", userSchema);

module.exports = Users;
