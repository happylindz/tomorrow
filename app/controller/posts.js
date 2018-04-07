'use strict';

const { Controller } = require('beidou-core');

class PostController extends Controller {
  async index(ctx) {
    ctx.body = await ctx.service.posts.get();
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = PostController;
