'use strict';

const { Controller } = require('beidou-core');
const constants = require('../../client/constants');

class IndexController extends Controller {
  async route() {
    const { ctx } = this;
    let preloadedState = null;
    if (ctx.params.route === '') {
      console.log('index');
    } else if (ctx.params.route === 'archives') {
      console.log('archives');
    } else if (ctx.params.route === 'project') {
      try {
        const data = await ctx.service.project.get();
        if (Array.isArray(data)) {
          preloadedState = {
            project: {
              projectData: data,
              state: constants.SUCCESS_STATE,
            },
          };
        }
      } catch (e) {
        ctx.app.emit('error', e);
      }
    } else if (ctx.params.route === 'about') {
      console.log('about');
    }
    await ctx.render('index', { preloadedState });
  }
}

module.exports = IndexController;
