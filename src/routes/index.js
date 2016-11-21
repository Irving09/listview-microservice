'use strict';

const Router = require('koa-router');
const co = require('co');
const api = require('./api');

const router = new Router();

router.get('/', co.wrap(function* () {
    this.redirect('/products');
}));

router.use(api.routes());

module.exports = router;