'use strict';

const Router = require('koa-router');
const Controller = require('../../controllers');

const router = new Router({
    prefix: '/products'
});

router.get('/', Controller.getProducts);
router.get('/:id', Controller.getProductById);

module.exports = router;