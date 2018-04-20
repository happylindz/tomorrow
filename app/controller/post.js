
const { Controller } = require('egg');
const constants = require('../../client/constants');

class PostController extends Controller {
  async index(ctx) {
    if (ctx.query.type === constants.ALL_POSTS) {
      ctx.body = {
        type: constants.ALL_POSTS,
        postsData: await ctx.service.post.queryAll('title url tags createdTime'),
      };
    } else if (ctx.query.type === constants.PART_POSTS && ctx.query.page) {
      const data = {
        postsData: await ctx.service.post.query('title cover url tags createdTime desc index', ctx.query.page || 1),
        total: await ctx.service.post.count(),
        page: ctx.query.page,
      };
      ctx.body = {
        type: constants.PART_POSTS,
        ...data,
      };
    } else {
      throw new Error('参数不正确，无法获取数据');
    }
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = PostController;
