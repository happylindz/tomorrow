const { Controller } = require('egg');
const moment = require('moment');
const fromConfig = require('../../secret/config.json').fromConfig;

class CommentController extends Controller {
  async index(ctx) {
    const messagesData = await ctx.service.message.queryAll('name createdTime content ref');
    for (let i = 0, len = messagesData.length; i < len; i++) {
      messagesData[i] = {
        name: messagesData[i].name,
        createdTime: moment(messagesData[i].createdTime).format('YYYY-MM-DD HH:mm:ss'),
        content: messagesData[i].content,
        refTo: messagesData[i].ref,
        _id: messagesData[i]._id,
      };
    }
    for (let i = 0, len = messagesData.length; i < len; i++) {
      const comment = messagesData[i];
      if (comment.refTo) {
        const selected = messagesData.filter((item) => {
          return item._id.toString() === comment.refTo.toString();
        });
        if (selected.length === 1) {
          comment.refTo = selected[0];
        }
      }
    }
    const data = {
      messagesData,
    };
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
      message: '评论成功',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = CommentController;
