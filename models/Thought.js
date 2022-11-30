const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    thoughtText: {},
    createAt: {},
    username: {},
    reactions: [reactionSchema],
  },
  {
    toJson: {
      getters: true,
    },
    id: false,
  }
);

// add virtual for reaction count

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
