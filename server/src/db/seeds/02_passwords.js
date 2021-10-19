exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("passwords")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("passwords").insert([
        {
          domain_name: "facebook.com",
          password: "qwerty123",
          email: "anakin@skywalker.com",
          user_id: 1,
        },
        {
          domain_name: "twitter.com",
          password: "acb123",
          username: "anakinskywalker",
          user_id: 1,
        },
        {
          domain_name: "instagram.com",
          password: "123456789",
          username: "skywalker",
          user_id: 1,
        },
        {
          domain_name: "netflix.com",
          password: "amazonprime",
          username: "obiwan",
          user_id: 2,
        },
      ]);
    });
};
