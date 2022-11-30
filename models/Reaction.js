const { Scheme, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = newSchema(
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
