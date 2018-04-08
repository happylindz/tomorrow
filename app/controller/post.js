'use strict';

const { Controller } = require('beidou-core');
const constants = require('../../client/constants');

class PostController extends Controller {
  async index(ctx) {
    if (ctx.query.type === constants.ALL_POSTS) {
      ctx.body = await ctx.service.post.get({
        type: 'ALL',
        query: 'title url createdTime',
      });
    } else if (ctx.query.type === constants.PART_POSTS && ctx.query.page) {
      ctx.body = await ctx.service.post.get({
        type: 'PART',
        query: 'title cover url createdTime',
        page: parseInt(ctx.query.page, 10),
      });
    } else {
      throw new Error('参数不正确，无法获取数据');
    }
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = PostController;
