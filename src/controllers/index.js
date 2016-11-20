'use strict';

const Adapter = require('../adapters');
const co = require('co');

exports.getProducts = co.wrap(function* () {
    this.body = yield Adapter.getProducts();
});

exports.getProductById = co.wrap(function* (next) {
    this.body = yield Adapter.getProductById(this.params.id);
});