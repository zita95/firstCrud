
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.integer('age');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
