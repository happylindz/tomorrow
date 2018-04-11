'use strict';

const { Controller } = require('beidou-core');
const constants = require('../../client/constants');

class AdminCommentController extends Controller {
  async index(ctx) {
    console.log('hehel wo');
    ctx.body = {
      type: constants.ALL_POSTS,
      ...await ctx.service.post.queryAllData('title url createdTime'),
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = AdminCommentController;
