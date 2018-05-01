
const { Controller } = require('egg');

class CommentController extends Controller {
  async index(ctx) {
    const data = {
      postsData: await ctx.service.post.query('title cover url tags createdTime desc index', ctx.query.page || 1),
      total: await ctx.service.post.count(),
      page: ctx.query.page,
    };
    ctx.body = {
      ...data,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
  async create(ctx) {
    console.log(8888);
    ctx.body = {
      message: '成功新增博文',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async update(ctx) {
    console.log(8888);
    ctx.body = {
      message: '成功修改博文',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = CommentController;
