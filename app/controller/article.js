'use strict';

const { Controller } = require('beidou-core');

class ArticleController extends Controller {
  async index(ctx) {
    const { url } = ctx.query;
    const data = await ctx.service.post.queryArticle(url);
    ctx.body = {
      url,
      content: data[0].content,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ArticleController;
