
const { Controller } = require('egg');
const moment = require('moment');
const fromConfig = require('../../secret/config.json').fromConfig;

class CommentController extends Controller {
  async index(ctx) {
    const commentsData = await ctx.service.comment.queryByPostId('name createdTime content ref postId', ctx.query.postId);
    for (let i = 0, len = commentsData.length; i < len; i++) {
      commentsData[i] = {
        name: commentsData[i].name,
        createdTime: moment(commentsData[i].createdTime).format('YYYY-MM-DD HH:mm:ss'),
        content: commentsData[i].content,
        refTo: commentsData[i].ref,
        postId: commentsData[i].postId,
        _id: commentsData[i]._id,
      };
    }
    for (let i = 0, len = commentsData.length; i < len; i++) {
      const comment = commentsData[i];
      if (comment.refTo) {
        const selected = commentsData.filter((item) => {
          return item._id.toString() === comment.refTo.toString();
        });
        if (selected.length === 1) {
          comment.refTo = selected[0];
        }
      }
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
      message: '评论成功',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = CommentController;
