exports.up = function (knex) {
  return knex.schema.createTable("passwords", function (table) {
    table.increments("id").primary();
    table.string("domain_name").notNullable();
    table.string("password").notNullable();
    table.string("email");
    table.string("username");
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("passwords");
};
