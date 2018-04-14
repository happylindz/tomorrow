'use strict';

const { Controller } = require('beidou-core');
const fs = require('fs');
const path = require('path');

class AdminController extends Controller {
  async route(ctx) {
    ctx.body = fs.createReadStream(path.join(__dirname, '../public/index.html'));
    ctx.type = 'html';
  }

  async login(ctx) {
    ctx.body = fs.createReadStream(path.join(__dirname, '../public/index.html'));
    ctx.type = 'html';
    // ctx.redirect('/admin/login', '/admin.html', 302);
  }

  async check(ctx) {
    const { username, password } = ctx.request.body;
    if (username === 'admin' && password === 'admin') {
      ctx.session.userId = 'admin';
      ctx.redirect('/admin/post');
    } else {
      ctx.body = '密码错误';
      ctx.status = 200;
    }
  }

  async logout(ctx) {
    ctx.session.userId = null;
    ctx.redirect('/admin/login');
  }
}

module.exports = AdminController;
