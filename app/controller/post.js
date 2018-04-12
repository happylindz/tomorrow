'use strict';

const { Controller } = require('beidou-core');
const constants = require('../../client/constants');

class PostController extends Controller {
  async index(ctx) {
    if (ctx.query.type === constants.ALL_POSTS) {
      ctx.body = {
        type: constants.ALL_POSTS,
        ...await ctx.service.post.queryAllData('title url tags createdTime'),
      };
    } else if (ctx.query.type === constants.PART_POSTS && ctx.query.page) {
      ctx.body = {
        type: constants.PART_POSTS,
        ...await ctx.service.post.queryPartData('title cover url tags createdTime desc index', parseInt(ctx.query.page, 10)),
      };
    } else {
      throw new Error('参数不正确，无法获取数据');
    }
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = PostController;
