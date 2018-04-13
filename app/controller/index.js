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
      const data = {
        postsData: await ctx.service.post.query('title cover url createdTime desc index', page || 1),
        total: await ctx.service.post.count(),
        page,
      };
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
      await ctx.render('index');
    }
  }

  async archives(ctx) {
    try {
      const data = await ctx.service.post.queryAll('title cover url createdTime');
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
      await ctx.render('index');
    }
  }

  async about(ctx) {
    await ctx.render('index');
  }

  async project(ctx) {
    try {
      const data = await ctx.service.project.queryAll();
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
      await ctx.render('index');
    }
  }

  async article(ctx) {
    const { url } = ctx.params;
    try {
      const data = await ctx.service.post.queryArticle(url);
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
      await ctx.render('index');
    }
  }
}

module.exports = IndexController;
