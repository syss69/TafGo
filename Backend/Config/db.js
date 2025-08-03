import mariadb from "mariadb";

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: 'TafGo',
    connectionLimit: 5
});

export default pool;