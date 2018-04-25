
const { Controller } = require('egg');
const moment = require('moment');

class ArchivesController extends Controller {
  async index(ctx) {
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
    ctx.body = {
      postsData,
    };
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = ArchivesController;
