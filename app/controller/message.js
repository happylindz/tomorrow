const { Controller } = require('egg');
const fromConfig = require('../../secret/config.json').fromConfig;

class CommentController extends Controller {
  async create(ctx) {
    const data = ctx.request.body;
    const res = await ctx.service.message.add(data);
    let from = null;
    if (data.ref) {
      const fromData = await ctx.service.message.queryById('name content email', data.ref);
      from = {
        name: fromData.name,
        content: fromData.content,
        email: fromData.email,
      };
    } else {
      from = fromConfig;
    }
    await ctx.service.message.sendEmail({
      to: {
        name: data.name,
        content: data.content,
      },
      from,
      href: `http://localhost:9001/about#${String(res._id).slice(-4)}`,
    }, from.email);
    ctx.body = {
      message: '评论成功',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async destroy(ctx) {
    const { id } = ctx.params;
    await ctx.service.message.delete(id);
    ctx.body = {
      message: '成功删除评论',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = CommentController;
