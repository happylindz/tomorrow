
const { Controller } = require('egg');
const moment = require('moment');

class ArticleController extends Controller {
  async index(ctx) {
    const { url } = ctx.query;
    const article = await ctx.service.post.queryArticle(url);
    const res = {
      url,
      content: article.content,
      index: article.index,
      _id: article._id,
      createdTime: moment(article.createdTime).format('YYYY-MM-DD'),
      title: article.title,
      tags: article.tags,
    };
    res.previous = await ctx.service.post.queryPrevious(article.createdTime, 'title url createdTime');
    res.next = await ctx.service.post.queryNext(article.createdTime, 'title url createdTime');
    ctx.body = res;
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ArticleController;
