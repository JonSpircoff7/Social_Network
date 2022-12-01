const { User, Thought } = require("../models");

const userController = {
  getUsers() {
    // grabs all users
    User.find()
      .then(async (users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // grabs a single user
  getUser() {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //create a user
  createUser() {
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => res.status(500).json(err));
  },
  //delete a user
  deleteUser() {
    User.findOneAndRemove({ _id: req.params.UserId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user match" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.status(404).json({
          message: "User deleted",
        })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update user
  updateUser() {
    User.findOneAndUpdate(
      { _id: req.params.UserId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "No User with this id! Try again." })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // add friend
  addFriend() {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove friend
  removeFriend() {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.assignmentId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found with that ID !" })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;
