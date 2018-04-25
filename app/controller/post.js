
const { Controller } = require('egg');

class PostController extends Controller {
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
}

module.exports = PostController;
