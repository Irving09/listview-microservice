'use strict';

const Bluebird = require('bluebird');
const mysql = require('mysql2/promise');
const co = require('co');

exports.getProducts = co.wrap(function* (next) {
    let connection = yield mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PW,
        database: process.env.MYSQL_DB,
        Promise: Bluebird
    });

    let products = yield connection.query(`
        SELECT 
            *
        FROM
            product
        ORDER BY rating DESC
        LIMIT 20;
    `);

    // TODO make connection to S3 bucket and grab image for each product id here

    connection.end();

    this.body = products[0];
});

exports.getProductById = co.wrap(function* (next) {
    this.body = yield Promise.resolve('a single product with the id ' + this.params.id);
});