const { Controller } = require('egg');

class ProjectController extends Controller {

  async create(ctx) {
    const data = ctx.request.body;
    await ctx.service.project.add(data);
    ctx.body = {
      message: '成功新增项目',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async update(ctx) {
    const { id } = ctx.params;
    const data = ctx.request.body;
    await ctx.service.project.update(id, data);
    ctx.body = {
      message: '成功修改项目',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async destroy(ctx) {
    const { id } = ctx.params;
    await ctx.service.project.delete(id);
    ctx.body = {
      message: '成功删除项目',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ProjectController;
