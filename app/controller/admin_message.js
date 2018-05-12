
const { Controller } = require('egg');
const fromConfig = require('../../secret/config.json');

class AdminMessageController extends Controller {
  async index(ctx) {
    const { page = 1, size = 10 } = ctx.query;
    const data = {
      messagesData: await ctx.service.message.query('name createdTime email content ref', page, size),
      total: await ctx.service.message.count(),
      page: parseInt(page, 10),
    };
    for (let i = 0; i < data.messagesData.length; i++) {
      const message = data.messagesData[i];
      data.messagesData[i] = {
        _id: message._id,
        createdTime: message.createdTime,
        ref: message.ref,
        content: message.content,
        email: message.email,
        name: message.name,
      };
    }
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }

  async create(ctx) {
    const data = ctx.request.body;
    const res = await ctx.service.message.add(data);
    let from = null;
    if (data.ref) {
      const fromData = await ctx.service.message.queryById('name content email', data.ref);
      from = {
        name: fromData[0].name,
        content: fromData[0].content,
        email: fromData[0].email,
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
      message: '成功新增评论',
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

module.exports = AdminMessageController;
