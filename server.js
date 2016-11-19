'use strict';

const app = require('koa')();
const router = require('./src/routes');

app.use(router.routes());

app.listen(process.env.port || 3000);