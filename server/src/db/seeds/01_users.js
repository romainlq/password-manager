const bcrypt = require("bcrypt");

const users = [
  { id: 1, username: "anakin", password: "skywalker" },
  { id: 2, username: "obiwan", password: "kenobi" },
  { id: 3, username: "harry", password: "potter" },
];

const getUsers = () => {
  return users.map((user) => {
    return {
      id: user.id,
      username: user.username,
      password: bcrypt.hashSync(user.password, 10),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  });
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(getUsers());
    });
};
