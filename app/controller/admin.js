
const { Controller } = require('egg');

class AdminController extends Controller {
  async route(ctx) {
    await ctx.render('admin');
  }

  async login(ctx) {
    await ctx.render('admin');
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
