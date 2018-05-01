
const { Controller } = require('egg');

class ArticleController extends Controller {
  async index(ctx) {
    const { url } = ctx.query;
    const data = await ctx.service.post.queryArticle(url);
    ctx.body = {
      url,
      content: data[0].content,
      index: data[0].index,
      _id: data[0]._id,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ArticleController;
