const { Controller } = require('egg');

class AdminProjectController extends Controller {
  async index(ctx) {
    const { page = 1, size = 10 } = ctx.query;
    const data = {
      projectsData: await ctx.service.project.query('title href content contentType', page, size),
      total: await ctx.service.project.count(),
      page: parseInt(page, 10),
    };
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }

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

module.exports = AdminProjectController;
