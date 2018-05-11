
const { Controller } = require('egg');
const moment = require('moment');
const pageSize = 10;
class PostController extends Controller {
  async index(ctx) {
    const time = ctx.query.time;
    const postsData = await ctx.service.post.queryByTime('title cover tags url createdTime desc count', time, pageSize);
    for (let i = 0; i < postsData.length; i++) {
      const post = postsData[i];
      postsData[i] = {
        _id: post._id,
        title: post.title,
        cover: post.cover,
        tags: post.tags.split(','),
        url: post.url,
        createdTime: moment(post.createdTime).format('YYYY-MM-DD HH:mm:ss'),
        desc: post.desc,
        comment: (await ctx.service.comment.queryCountByArticle(post._id)),
        count: post.count,
      };
    }
    const data = {
      postsData,
      end: postsData.length < pageSize,
    };
    ctx.body = data;
    ctx.type = 'json';
    ctx.status = 200;
  }
}

module.exports = PostController;
