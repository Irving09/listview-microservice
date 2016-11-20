'use strict';

const Adapter = require('../adapters');
const co = require('co');

exports.getProducts = co.wrap(function* () {
    this.body = yield Adapter.getProducts();
});

exports.getProductById = co.wrap(function* (next) {
    // validate that id is an integer here
    if (!isNaN(this.params.id) && Number(this.params.id) > 0) {
        this.body = yield Adapter.getProductById(this.params.id);
        this.status = 200;
    } else {
        this.throw(new Error(`${this.params.id} must be a valid product id`));
    }
});