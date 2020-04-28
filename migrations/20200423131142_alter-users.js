
exports.up = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.integer('groupID').unsigned();
    table.foreign('groupID').references('groups.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
