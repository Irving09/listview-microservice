const router = require('koa-router')();
const Promise = require('bluebird');
const co = require('co');

const api = require('./api');

router.get('/', co.wrap(function* (next) {
    this.body = yield Promise.resolve('List View home');
}));

router.use(api.routes());

module.exports = router;