'use strict';

const app = require('koa')();
const router = require('./src/routes');

app.use(router.routes());

app.listen(3000);