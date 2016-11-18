const router = require('koa-router')();

router.get('/inno', function* (next) {
    this.body = 'Hello Inno!';
});

module.exports = router;