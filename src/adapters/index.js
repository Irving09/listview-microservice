'use strict';

const Bluebird = require('bluebird');
const mysql = require('mysql2/promise');
const co = require('co');

const CREDENTIALS = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    Promise: Bluebird
};

exports.getProducts = co.wrap(function* () {
    let connection = yield mysql.createConnection(CREDENTIALS);

    let products = yield connection.query(`
        SELECT 
            *
        FROM
            product
        ORDER BY rating DESC
        LIMIT 20;
    `);

    connection.end();
    return products[0];
});

exports.getProductById = co.wrap(function* (id) {
    let connection = yield mysql.createConnection(CREDENTIALS);

    let product = yield connection.query(`
        SELECT 
            *
        FROM
            product
        WHERE
            id = ${id}
    `);
    connection.end();
    return product[0];
});