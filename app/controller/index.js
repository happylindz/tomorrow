
const { Controller } = require('egg');
const constants = require('../../client/constants');
const createApp = require('../server/index.js').default;
const moment = require('moment');

class IndexController extends Controller {
  async renderView(ctx, data) {
    const [html, state] = await createApp(data, ctx.req.url);
    let tpl = await ctx.renderView('index');
    tpl = tpl.replace('<div id=root></div>', `<div id=root>${html}</div>`);
    tpl = tpl.replace('</head>', `<script>window.__INITIAL_STATE__=${JSON.stringify(state)}</script></head>`);
    ctx.body = tpl;
  }

  async home(ctx) {
    const {
      page,
    } = ctx.query;
    try {
      const postsData = await ctx.service.post.query('title cover tags url createdTime desc', page || 1);
      for (let i = 0; i < postsData.length; i++) {
        const post = postsData[i];
        postsData[i] = {
          _id: post._id,
          title: post.title,
          cover: post.cover,
          tags: post.tags.split(','),
          url: post.url,
          createdTime: moment(post.createdTime).format('YYYY-MM-DD'),
          desc: post.desc,
        };
      }
      const data = {
        postsData,
        total: await ctx.service.post.count(),
        page,
      };
      const preloadedState = {
        posts: {
          state: constants.SUCCESS_STATE,
          ...data,
        },
      };
      await this.renderView(ctx, preloadedState);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }

  async archives(ctx) {
    try {
      const postsData = await ctx.service.post.queryAll('title url tags createdTime');
      for (let i = 0; i < postsData.length; i++) {
        const post = postsData[i];
        postsData[i] = {
          _id: post._id,
          title: post.title,
          tags: post.tags.split(','),
          url: post.url,
          year: moment(post.createdTime).format('YYYY'),
          time: moment(post.createdTime).format('MM-DD'),
        };
      }
      const preloadedState = {
        archives: {
          state: constants.SUCCESS_STATE,
          postsData,
        },
      };
      await this.renderView(ctx, preloadedState);
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
        await this.renderView(ctx, preloadedState);
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
            index: data[0].index,
          },
        },
      };
      await this.renderView(ctx, preloadedState);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }
}

module.exports = IndexController;
