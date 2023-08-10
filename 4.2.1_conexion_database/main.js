const pg = require('pg');

//const Pool = pg.Pool;

const pool = new pg.Pool({
    host:'localhost',
    port: 5432,
    database:'dvdrentals',
    user:'postgres',
    password:'root',
});

