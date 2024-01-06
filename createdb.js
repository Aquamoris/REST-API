const pg = require('pg');

const config = {
    User: 'user',
    password: "root",
    host: "localhost",
    port: 5432,
    database: "postgres"
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {

    const query = 'SELECT * FROM person';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}