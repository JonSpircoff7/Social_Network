const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drops existing users in collection
  await User.deleteMany({});

  // Drop existing thoughts in collection
  await Thought.deleteMany({});

  // Seed users
  await User.collection.insertMany(users);

  // seed data
  await Thought.collection.insertMany(thoughts);

  console.info("Complete seeding");
  process.exit(0);
});
