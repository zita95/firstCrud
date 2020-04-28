
exports.up = function (knex) {
  return knex.schema.createTable('examples', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('maxSize');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('examples');
};
