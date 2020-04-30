exports.up = function (knex) {
    return knex.schema.alterTable('users', function (table) {
        table.enu('role', ['admin', 'user']);
        table.string('paassword');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
}; // alterTable("users", (table) => { table.dropColumn('groupID); table.dropColumn('password');...});

