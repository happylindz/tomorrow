
const { Controller } = require('egg');

class AdminCommentController extends Controller {
  async index(ctx) {
    const { page = 1, size = 10 } = ctx.query;
    const data = {
      commentsData: await ctx.service.comment.query('name createdTime email content ref postId', page, size),
      total: await ctx.service.comment.count(),
      page: parseInt(page, 10),
    };
    for (let i = 0; i < data.commentsData.length; i++) {
      const comment = data.commentsData[i];
      const postId = comment.postId;
      data.commentsData[i] = {
        _id: comment._id,
        createdTime: comment.createdTime,
        ref: comment.ref,
        postId: comment.postId,
        content: comment.content,
        email: comment.email,
        name: comment.name,
        title: (await ctx.service.post.queryArticleById(postId, 'title')).title
      };
    }
    // console.log(data);
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }

  async create(ctx) {
    const data = ctx.request.body;
    await ctx.service.comment.add(data);
    ctx.body = {
      message: '成功新增评论',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async destroy(ctx) {
    const { id } = ctx.params;
    await ctx.service.comment.delete(id);
    ctx.body = {
      message: '成功删除评论',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = AdminCommentController;
