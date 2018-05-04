
const { Controller } = require('egg');
const fromConfig = require('../../secret/config.json');

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
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }

  async create(ctx) {
    const data = ctx.request.body;
    const res = await ctx.service.comment.add(data);
    let from = null;
    const href = (await ctx.service.post.queryArticleById(data.postId, 'url')).url;
    if (data.ref) {
      const fromData = await ctx.service.comment.queryById('name content email', data.ref);
      from = {
        name: fromData[0].name,
        content: fromData[0].content,
        email: fromData[0].email,
      };
    } else {
      from = fromConfig;
    }
    await ctx.service.comment.sendEmail({
      to: {
        name: data.name,
        content: data.content,
      },
      from,
      href: `http://localhost:9001/article/${href}#${String(res._id).slice(-4)}`,
    }, from.email);
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
