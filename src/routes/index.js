const Boom = require('boom');
const router = require('koa-router')();
const api = require('./api');

router.get('/', function* (next) {
    this.body = 'Hello World!';
});

router.use(api.routes());

module.exports = router;