'use strict';

const app = require('koa')();
const router = require('koa-router')();

// app.use(function *(){
//     this.body = 'Hello World';
// });

router
    .get('/', function *(next) {
        this.body = 'Hello World!';
    })
    .get('/inno', function *(next) {
        this.body = 'Hello Inno!';
    });

app.use(router.routes());

app.listen(3000);