const Pool = require('pg').Pool;

const pool = new Pool({
    User: 'user',
    password: "root",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

module.exports = pool;
