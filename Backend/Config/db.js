import mariadb from "mariadb";
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MARIADB_HOST || !process.env.MARIADB_USER || !process.env.MARIADB_PASSWORD) {
  throw new Error("Missing required database environment variables.");
}

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: 'TafGo',
    connectionLimit: 5
});

export default pool;