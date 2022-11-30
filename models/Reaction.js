const { Schema, types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    reactionId: {},
    reactionBody: {},
    username: {},
    createdAt: {},
  },
  {
    toJson: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
