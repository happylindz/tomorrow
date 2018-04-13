'use strict';

const streamToPromise = require('stream-to-promise');
const { Controller } = require('beidou-core');

class AdminPostController extends Controller {
  async index(ctx) {
    const {
      page = 1,
      size = 10,
    } = ctx.query;
    const data = {
      postsData: await ctx.service.post.query('title url cover createdTime tags', page, size),
      total: await ctx.service.post.count(),
      page: parseInt(page, 10),
    };
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }

  async create(ctx) {
    const stream = await ctx.getFileStream();
    const data = stream.fields;
    data.url = stream.filename.replace(/.md/g, '');
    data.content = (await streamToPromise(stream)).toString();
    await ctx.service.post.add(data);
    ctx.body = {
      message: '成功新增博文',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async update(ctx) {
    const stream = await ctx.getFileStream();
    const data = stream.fields;
    data.url = stream.filename.replace(/.md/g, '');
    data.content = (await streamToPromise(stream)).toString();
    await ctx.service.post.update(ctx.params.id, data);
    ctx.body = {
      message: '成功修改博文',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async destroy(ctx) {
    await ctx.service.post.delete(ctx.params.id);
    ctx.body = {
      message: '成功删除博文',
      code: 0,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = AdminPostController;
