'use strict';

const { Controller } = require('beidou-core');
const constants = require('../../client/constants');

class IndexController extends Controller {
  async route(ctx) {
    await ctx.render('index');
  }

  async home(ctx) {
    const {
      page,
    } = ctx.query;
    try {
      const data = await ctx.service.post.queryPartData('title cover url createdTime', parseInt(page, 10) || 1);
      const preloadedState = {
        posts: {
          state: constants.SUCCESS_STATE,
          type: constants.PART_POSTS,
          ...data,
        },
      };
      await ctx.render('index', { preloadedState });
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }

  async archives(ctx) {
    try {
      const data = await ctx.service.post.queryAllData('title cover url createdTime');
      const preloadedState = {
        posts: {
          state: constants.SUCCESS_STATE,
          type: constants.ALL_POSTS,
          ...data,
        },
      };
      await ctx.render('index', { preloadedState });
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }

  async about(ctx) {
    await ctx.render('index');
  }

  async project(ctx) {
    try {
      const data = await ctx.service.project.get();
      if (Array.isArray(data)) {
        const preloadedState = {
          project: {
            projectData: data,
            state: constants.SUCCESS_STATE,
          },
        };
        await ctx.render('index', { preloadedState });
      }
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }

  async article(ctx) {
    const { url } = ctx.params;
    try {
      const data = await ctx.service.post.queryArticleByUrl(url);
      const preloadedState = {
        article: {
          state: constants.SUCCESS_STATE,
          article: {
            url,
            content: data[0].content,
          },
        },
      };
      await ctx.render('index', { preloadedState });
    } catch (e) {
      ctx.app.emit('error', e);
    }
  }
}

module.exports = IndexController;
