
const { Controller } = require('egg');

class InfoController extends Controller {
  async index(ctx) {
    ctx.body = (await ctx.service.info.query('html'))[0];
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = InfoController;
