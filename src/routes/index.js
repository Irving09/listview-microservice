'use strict';

const Router = require('koa-router');
const products = require('./product');

const router = new Router();

router.use(products.routes());

module.exports = router;