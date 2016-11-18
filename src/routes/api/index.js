const Router = require('koa-router');
const router = new Router({
    prefix: '/products'
});

router.get('/', function* (next) {
    this.body = 'Top 20 rated products';
});

router.get('/:id', function* (next) {
    this.body = 'a single product with the id ' + this.params.id;
});

module.exports = router;