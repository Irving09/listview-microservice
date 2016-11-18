const Boom = require('boom');
const router = require('koa-router')();
const api = require('./api');

router.get('/', function* (next) {
    this.body = 'List View home';
});

router.use(api.routes());

module.exports = router;