
const { Controller } = require('egg');
const moment = require('moment');

class CommentController extends Controller {
  async index(ctx) {
    const commentsData = await ctx.service.comment.queryByArticle('name createdTime content postId', ctx.query.postId);
    for (let i = 0, len = commentsData.length; i < len; i++) {
      const comment = commentsData[i];
      commentsData[i] = {
        name: comment.name,
        createdTime: moment(comment.createdTime).format('YYYY-MM-DD'),
        content: comment.content,
        postId: comment.postId,
      };
    }
    const data = {
      commentsData,
    };
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }
  async create(ctx) {
    const data = ctx.request.body;
    await ctx.service.comment.add(data);
    ctx.body = {
      message: '评论成功',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = CommentController;
