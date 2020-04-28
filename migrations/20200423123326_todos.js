exports.up = function (knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.enu('status', ['important', 'freetime', 'family']);
    table.integer('userID').unsigned();
    table.foreign('userID').references('users.id');
    table.integer('categoryID').unsigned();
    table.foreign('categoryID').references('categories.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('todos');
};
