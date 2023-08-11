import mysql from 'mysql';
export const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'rentvehicle',
    port: 3306
});