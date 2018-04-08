'use strict';

const { Controller } = require('beidou-core');
const constants = require('../../client/constants');

class IndexController extends Controller {
  async route() {
    const { ctx } = this;
    let preloadedState = null;
    if (ctx.params.route === '' || ctx.params.route === undefined) {
      preloadedState = await this.queryPostsDataByPage(ctx.query.page);
    } else if (ctx.params.route === 'archives') {
      preloadedState = await this.queryAllPostsData();
    } else if (ctx.params.route === 'project') {
      preloadedState = await this.queryProjectData();
    } else if (ctx.params.route === 'about') {
      // console.log('about');
    }
    await ctx.render('index', { preloadedState });
  }

  async queryAllPostsData() {
    const { ctx } = this;
    try {
      const data = await ctx.service.post.queryAllData('title cover url createdTime');
      const preloadedState = {
        posts: {
          state: constants.SUCCESS_STATE,
          type: constants.ALL_POSTS,
          ...data,
        },
      };
      return preloadedState;
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }

  async queryPostsDataByPage(page) {
    const { ctx } = this;
    try {
      const data = await ctx.service.post.queryPartData('title cover url createdTime', parseInt(page, 10) || 1);
      const preloadedState = {
        posts: {
          state: constants.SUCCESS_STATE,
          type: constants.PART_POSTS,
          ...data,
        },
      };
      return preloadedState;
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }

  async queryProjectData() {
    const { ctx } = this;
    try {
      const data = await ctx.service.project.get();
      if (Array.isArray(data)) {
        const preloadedState = {
          project: {
            projectData: data,
            state: constants.SUCCESS_STATE,
          },
        };
        return preloadedState;
      }
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }
}

module.exports = IndexController;
