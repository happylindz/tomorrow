
const { Controller } = require('egg');
const moment = require('moment');

class PostController extends Controller {
  async index(ctx) {
    const {
      page,
    } = ctx.query;
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
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = PostController;
