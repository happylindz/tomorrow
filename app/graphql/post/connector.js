
class PostConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async queryByUrl(url) {
    const post = await this.ctx.service.post.queryByUrl(url);
    post.previous = await this.ctx.service.post.queryPrevious(post.createdTime);
    post.next = await this.ctx.service.post.queryNext(post.createdTime);
    post.comments = await this.ctx.connector.comment.queryAllCommentsByPostId(post._id);
    return post;
  }

  async queryByTime(time, size) {
    if (!size) {
      size = await this.ctx.service.post.count();
    }
    const posts = await this.ctx.service.post.queryByTime(time, size);
    for (let i = 0; i < posts.length; i++) {
      posts[i].commentCount = await this.ctx.service.comment.queryCountByPostId(posts[i]._id);
    }
    const data = {
      posts,
      end: posts.length < size,
    };
    return data;
  }

  async query(page = 1, size = 10) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      posts: await this.ctx.service.post.query(page, size),
      total: await this.ctx.service.post.count(),
      page,
    };
    return data;
  }
}

module.exports = PostConnector;
