const bcrypt = require("bcrypt");

const password1 = "password";
const hashpassword1 = bcrypt.hashSync(password1, 10);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          email: "admin@email.com",
          password: hashpassword1,
          postCode: "852",
          tel: "12345678",
          role: "admin",
          status: true,
        }
      ]);
    });
};
