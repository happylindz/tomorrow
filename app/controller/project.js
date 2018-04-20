
const { Controller } = require('egg');

class ProjectController extends Controller {
  async index(ctx) {
    ctx.body = await ctx.service.project.queryAll();
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ProjectController;
