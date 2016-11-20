'use strict';

const Router = require('koa-router');
const controller = require('../../controllers');

const router = new Router({
    prefix: '/products'
});

router.get('/', controller.getProducts);
router.get('/:id', controller.getProductById);

module.exports = router;