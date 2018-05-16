
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
    const { info, appKey } = this.app.config;
    if (username === info.username && password === info.password) {
      ctx.session.userId = appKey;
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
