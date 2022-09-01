exports.up = function (knex) {
  return knex.schema
    .createTable("members", (table) => {
      table.increments();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("otherNames");
      table.string("email").unique();
      table.string("contact");
      table.string("dateOfBirth").notNullable();
      table.boolean("status");
      table.string("hometown");
      table.string("regionOfHometown");
      table.string("maritalStatus");
      table.string("residence");
      table.timestamps(true, true);
    })
    .createTable("groups", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("description");
      table.timestamps(true, true);
    })
    .createTable("member_groups", (table) => {
      table.increments();
      table.integer("groupId").notNullable().references("id").inTable("groups");
      table
        .integer("memberId")
        .notNullable()
        .references("id")
        .inTable("members");
     table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("members")
    .dropTableIfExists("groups")
    .dropTableIfExists("member_groups");
};
