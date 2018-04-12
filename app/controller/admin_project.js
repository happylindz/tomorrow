'use strict';

const { Controller } = require('beidou-core');

class AdminProjectController extends Controller {
  async index(ctx) {
    const {
      page = 1,
      size = 10,
    } = ctx.query;
    ctx.body = await ctx.service.project.query('title href content contentType', page, size);
    ctx.type = 'json';
    ctx.status = 200;
  }

  async create(ctx) {
    try {
      const data = ctx.body;
      console.log(data);
      await ctx.service.project.add(data);
      ctx.body = {
        message: '成功新增项目',
        code: 0,
      };
    } catch (e) {
      ctx.body = {
        message: '创建失败',
        code: 1,
      };
    }
    ctx.type = 'json';
    ctx.status = 200;
  }

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const data = ctx.body;
      await ctx.service.project.update(id, data);
      ctx.body = {
        message: '成功修改项目',
        code: 0,
      };
    } catch (e) {
      ctx.boyd = {
        message: '修改失败',
        code: 1,
      };
    }
    ctx.type = 'json';
    ctx.status = 200;
  }

  async destroy(ctx) {
    try {
      const { id } = ctx.params;
      await ctx.service.project.delete(id);
      ctx.body = {
        message: '成功删除项目',
        code: 0,
      };
    } catch (e) {
      ctx.body = {
        message: '删除失败',
        code: 1,
      };
    }
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = AdminProjectController;
