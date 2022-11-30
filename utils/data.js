const users = [
  {
    username: "Jonathan Spircoff",
    email: "JonSpircoff7@yahoo.com",
    thoughts: [],
    friends: [],
    __v: 0,
  },
  {
    username: "Somebody Is Cool",
    email: "isCool@msn.com",
    thoughts: [],
    friends: [],
    __v: 0,
  },
];
const thoughts = [
  {
    thoughtText: "What am I thinking today",
    username: "Somebody is Cool",
    createdAt: "2024-10-26T08:04:27.066+00:00",
    reactions: [
      {
        reactionBody: "Craaazy reactions by me",
        username: "Somebody Is Cool",
        reactionId: "658043c9437ed5ed86983d92",
        createdAt: "2024-10-26T09:09:17.076+00:00",
      },
    ],
    __v: 0,
  },
  {
    thoughtText: "What a beautiful day in the neighborhood",
    username: "Somebody Is Cool",
    createdAt: "2024-10-26T09:09:17.076+00:00",
    reactions: [
      {
        reactionBody: "What a beautiful thought",
        username: "Jonathan Spircoff",
        reactionId: "6567848e237ed4ed85683d8a",
        createdAt: "2024-10-26T09:09:17.076+00:00",
      },
    ],
    __v: 0,
  },
];

module.exports = { users, thoughts };
