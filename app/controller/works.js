'use strict';

const { Controller } = require('beidou-core');

class WorksController extends Controller {
  async index(ctx) {
    ctx.body = await ctx.service.works.get();
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = WorksController;
