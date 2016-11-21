'use strict';

const app = require('koa')();
const router = require('./src/routes');

// register api routes
app.use(router.routes());

// Start the app
app.listen(process.env.PORT || 3000);