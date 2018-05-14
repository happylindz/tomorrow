
const moment = require('moment');
class PostConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async queryByUrl(url) {
    const post = await this.ctx.service.post.queryArticle(url);
    const res = {
      url,
      content: post.content,
      index: post.index,
      _id: post._id,
      createdTime: moment(post.createdTime).format('YYYY-MM-DD'),
      title: post.title,
      tags: post.tags,
      readCount: post.count,
    };
    res.previous = await this.ctx.service.post.queryPrevious(post.createdTime, 'title url');
    res.next = await this.ctx.service.post.queryNext(post.createdTime, 'title url');
    res.comments = await this.ctx.connector.comment.queryAllCommentsByPostId(post._id);
    return res;
  }

  async queryByTime(time) {
    const pageSize = 10;
    const posts = await this.ctx.service.post.queryByTime('title cover tags url createdTime desc count', time, pageSize);
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      posts[i] = {
        _id: post._id,
        title: post.title,
        cover: post.cover,
        tags: post.tags,
        url: post.url,
        createdTime: moment(post.createdTime).format('YYYY-MM-DD HH:mm:ss'),
        desc: post.desc,
        commentCount: (await this.ctx.service.comment.queryCountByPostId(post._id)),
        readCount: post.count,
      };
    }
    const data = {
      posts,
      end: posts.length < pageSize,
    };
    return data;
  }

  async query(page = 1, size = 10) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      posts: await this.ctx.service.post.query('title url cover createdTime tags', page, size),
      total: await this.ctx.service.post.count(),
      page: parseInt(page, 10),
    };
    return data;
  }

  async queryAll() {
    const posts = await this.ctx.service.post.queryAll('title url tags createdTime');
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      posts[i] = {
        _id: post._id,
        title: post.title,
        tags: post.tags,
        url: post.url,
        year: moment(post.createdTime).format('YYYY'),
        time: moment(post.createdTime).format('MM-DD'),
      };
    }
    return {
      posts
    };
  }

}

module.exports = PostConnector;
