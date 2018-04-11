'use strict';

const { Controller } = require('beidou-core');

class AdminController extends Controller {
  async route(ctx) {
    // ctx.redirect('/admin/login');
    ctx.body = 1111;
  }

  async login(ctx) {
    ctx.body = 222;
  }
}

module.exports = AdminController;
