const Router = require('koa-router');
const Promise = require('bluebird');
const co = require('co');

const router = new Router({
    prefix: '/products'
});

router.get('/', co.wrap(function* (next) {
    this.body = yield Promise.resolve('Top 20 rated products');
}));

router.get('/:id', co.wrap(function* (next) {
    this.body = yield Promise.resolve('a single product with the id ' + this.params.id);
}));

module.exports = router;