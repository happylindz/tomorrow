
const { Controller } = require('egg');

class CommentController extends Controller {
  async create(ctx) {
    const data = ctx.request.body;
    const res = await ctx.service.comment.add(data);
    const from = {
      ...this.app.config.mailOptions
    };
    if (data.refTo) {
      const fromData = await ctx.service.comment.queryById(data.refTo);
      from.name = fromData.name;
      from.content = fromData.content;
      from.email = fromData.email;
    }
    const url = (await ctx.service.post.queryPostById(data.postId)).url;
    await ctx.service.mail.sendMail({
      from,
      to: {
        name: data.name,
        content: data.content,
      },
      href: `${this.app.config.baseUrl}/article/${url}#${String(res._id).slice(-4)}`,
    }, { to: from.email });
    ctx.body = {
      message: '评论成功',
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

module.exports = CommentController;
