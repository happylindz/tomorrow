'use strict';

const { Controller } = require('beidou-core');
const state = require('../../client/constants');

class IndexController extends Controller {
  async route() {
    const { ctx } = this;
    let preloadedState = null;
    if (ctx.params.route === 'works') {
      try {
        const data = await ctx.service.works.get();
        if (Array.isArray(data)) {
          preloadedState = {
            works: {
              works: data,
              state: state.SUCCESS_STATE,
            },
          };
        }
      } catch (e) {
        ctx.app.emit('error', e);
      }
    }
    await ctx.render('index', { preloadedState });
  }
}

module.exports = IndexController;
