class CommentConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async queryComments(page, size) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      comments: await this.ctx.service.comment.query(page, size),
      total: await this.ctx.service.comment.count(),
      page,
    };
    for (let i = 0; i < data.comments.length; i++) {
      const comment = data.comments[i];
      data.comments[i].title = (await this.ctx.service.post.queryPostById(comment.postId)).title;
    }
    return data;
  }

  async queryMessages(page, size) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      comments: await this.ctx.service.message.query(page, size),
      total: await this.ctx.service.message.count(),
      page,
    };
    return data;
  }

  async queryAllMessages() {
    const comments = await this.ctx.service.message.queryAll();
    return this.processComments(comments);
  }

  async queryAllCommentsByPostId(postId) {
    const comments = await this.ctx.service.comment.queryByPostId(postId);
    return this.processComments(comments, postId);
  }

  processComments(comments, postId) {
    for (let i = 0, len = comments.length; i < len; i++) {
      const comment = comments[i];
      if (comment.refTo) {
        const selected = comments.filter((item) => {
          return item._id.toString() === comment.refTo.toString();
        });
        if (selected.length === 1) {
          comment.refTo = selected[0];
        }
      }
    }
    return comments;
  }
}

module.exports = CommentConnector;
