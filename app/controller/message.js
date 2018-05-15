
const { Controller } = require('egg');

class MessageController extends Controller {
  async create(ctx) {
    const data = ctx.request.body;
    const res = await ctx.service.message.add(data);
    const from = {
      ...this.app.config.mailOptions
    };
    if (data.refTo) {
      const fromData = await ctx.service.message.queryById(data.refTo);
      from.name = fromData.name;
      from.content = fromData.content;
      from.email = fromData.email;
    }
    await ctx.service.mail.sendMail({
      from,
      to: {
        name: data.name,
        content: data.content,
      },
      href: `${this.app.config.baseUrl}/about$#${String(res._id).slice(-4)}`,
    }, { to: from.email });
    ctx.body = {
      message: '留言成功',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
  async destroy(ctx) {
    const { id } = ctx.params;
    await ctx.service.message.delete(id);
    ctx.body = {
      message: '成功删除留言',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = MessageController;
