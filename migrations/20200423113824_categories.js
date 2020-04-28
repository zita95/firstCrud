exports.up = function (knex) {
  return knex.schema.createTable('categories', function (table) {
    table.increments();
    table.string('name');
    table.enu('status', ['important', 'freetime', 'family']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories');
};
