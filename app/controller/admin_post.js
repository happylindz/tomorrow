// 'use strict';
const streamToPromise = require('stream-to-promise');
const { Controller } = require('beidou-core');

class AdminPostController extends Controller {
  async index(ctx) {
    const {
      page = 1,
      size = 10,
    } = ctx.query;
    ctx.body = await ctx.service.post.queryPartData('title url cover createdTime tags', page, size);
    ctx.type = 'json';
    ctx.status = 200;
  }

  async create(ctx) {
    const stream = await ctx.getFileStream();
    const filename = stream.filename.replace(/.md/g, '');
    const data = stream.fields;
    const content = await streamToPromise(stream);
    data.url = filename;
    data.content = content.toString();
    await ctx.service.post.add(data);
    ctx.body = {
      message: '成功新增博文',
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async update(ctx) {
    const { id } = ctx.params;
    const stream = await ctx.getFileStream();
    const filename = stream.filename.replace(/.md/g, '');
    const data = stream.fields;
    const content = await streamToPromise(stream);
    data.url = filename;
    data.content = content.toString();
    await ctx.service.post.update(id, data);
    ctx.body = {
      message: '成功修改博文',
    };
    ctx.type = 'json';
    ctx.status = 200;
  }

  async destroy(ctx) {
    const { id } = ctx.params;
    await ctx.service.post.delete(id);
    ctx.body = {
      message: '成功删除',
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = AdminPostController;
