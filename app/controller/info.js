
const { Controller } = require('egg');

class InfoController extends Controller {

  async create(ctx) {
    const data = ctx.request.body;
    await ctx.service.info.add(data);
    ctx.body = {
      message: '成功新增个人信息',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async update(ctx) {
    const { id } = ctx.params;
    const data = ctx.request.body;
    await ctx.service.info.update(id, data);
    ctx.body = {
      message: '成功修改个人信息',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = InfoController;
