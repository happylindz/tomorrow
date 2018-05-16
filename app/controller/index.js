
const { Controller } = require('egg');
const constants = require('../../client/constants');
const createApp = require('../server/index.js').default;
const SQL = require('../../client/services/sql');

class IndexController extends Controller {
  async renderView(ctx, data) {
    const [html, state] = await createApp(data, ctx.req.url);
    let tpl = await ctx.renderView('index');
    tpl = tpl.replace('<div id=root></div>', `<div id=root>${html}</div>`);
    tpl = tpl.replace('</head>', `<script>window.__INITIAL_STATE__=${JSON.stringify(state)}</script></head>`);
    ctx.body = tpl;
  }

  async home(ctx) {
    try {
      const query = JSON.stringify(SQL.postsSQL({
        size: 10,
      }));
      const res = await ctx.service.graphql.query(query);
      res.data.posts.state = constants.SUCCESS_STATE;
      await this.renderView(ctx, res.data);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }

  async archives(ctx) {
    try {
      const query = JSON.stringify(SQL.archivesSQL());
      const res = await ctx.service.graphql.query(query);
      res.data.posts.state = constants.SUCCESS_STATE;
      res.data.archives = res.data.posts;
      delete res.data.posts;
      await this.renderView(ctx, res.data);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }

  async about(ctx) {
    try {
      const query = JSON.stringify(SQL.infoSQL());
      const res = await ctx.service.graphql.query(query);
      res.data.info.state = constants.SUCCESS_STATE;
      const comments = res.data.info.comments;
      delete res.data.info.comments;
      res.data.message = {
        messageState: constants.SUCCESS_STATE,
        comments: comments,
      };
      await this.renderView(ctx, res.data);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }

  async project(ctx) {
    try {
      const query = JSON.stringify(SQL.projectsSQL());
      const res = await ctx.service.graphql.query(query);
      res.data.projects.state = constants.SUCCESS_STATE;
      await this.renderView(ctx, res.data);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }

  async article(ctx) {
    const { url } = ctx.params;
    try {
      const query = JSON.stringify(SQL.postSQL({ url }));
      const res = await ctx.service.graphql.query(query);
      const comments = res.data.post.comments;
      delete res.data.post.comments;
      res.data.article = {
        article: res.data.post,
        state: constants.SUCCESS_STATE
      };
      delete res.data.post;
      res.data.comment = {
        commentState: constants.SUCCESS_STATE,
        comments: comments,
      };
      await this.renderView(ctx, res.data);
    } catch (e) {
      ctx.app.emit('error', e);
      await ctx.render('index');
    }
  }
}

module.exports = IndexController;
