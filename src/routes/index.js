const Router = require('koa-router');
const Promise = require('bluebird');
const co = require('co');
const api = require('./api');

const router = new Router();

router.get('/', co.wrap(function* (next) {
    this.redirect('/products');
}));

router.use(api.routes());

module.exports = router;