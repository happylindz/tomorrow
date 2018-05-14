
const { Controller } = require('egg');

class InfoController extends Controller {
  async index(ctx) {
    const data  = await ctx.service.info.query('html');
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = InfoController;
