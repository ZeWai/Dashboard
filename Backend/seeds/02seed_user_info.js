exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_info")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user_info").insert([
               {
                  name: "Admin",
          address: "Admin Garden, Admin Plaza",
          icon: null,
          image: null
        }
      ]);
    });
};
