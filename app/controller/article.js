
const { Controller } = require('egg');
const moment = require('moment');

class ArticleController extends Controller {
  async index(ctx) {
    const { url } = ctx.query;
    const data = await ctx.service.post.queryArticle(url);
    ctx.body = {
      url,
      content: data[0].content,
      index: data[0].index,
      _id: data[0]._id,
      createdTime: moment(data[0].createdTime).format('YYYY-MM-DD'),
      title: data[0].title,
      tags: data[0].tags,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ArticleController;
