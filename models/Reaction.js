const { Schema, types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 500,
      minlength: 4,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJson: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
