// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const {db} = require('./.env')

module.exports = {

    client: 'mysql2',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  

};
