const moment = require('moment');

class CommentConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async queryComments(page, size) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      comments: await this.ctx.service.comment.query('name createdTime email content ref postId', page, size),
      total: await this.ctx.service.comment.count(),
      page: parseInt(page, 10),
    };
    for (let i = 0; i < data.comments.length; i++) {
      const comment = data.comments[i];
      const postId = comment.postId;
      data.comments[i] = {
        _id: comment._id,
        createdTime: comment.createdTime,
        ref: comment.ref,
        postId: comment.postId,
        content: comment.content,
        email: comment.email,
        name: comment.name,
        title: (await this.ctx.service.post.queryArticleById(postId, 'title')).title
      };
    }
    return data;
  }

  async queryMessages(page, size) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      comments: await this.ctx.service.message.query('name createdTime email content ref', page, size),
      total: await this.ctx.service.message.count(),
      page,
    };
    return data;
  }

  async queryAllMessages() {
    const comments = await this.ctx.service.message.queryAll('name createdTime content ref');
    return this.processComments(comments);
  }

  async queryAllCommentsByPostId(postId) {
    const comments = await this.ctx.service.comment.queryByPostId('name createdTime content ref', postId);
    return this.processComments(comments, postId);
  }

  processComments(comments, postId) {
    for (let i = 0, len = comments.length; i < len; i++) {
      comments[i] = {
        name: comments[i].name,
        createdTime: moment(comments[i].createdTime).format('YYYY-MM-DD HH:mm:ss'),
        content: comments[i].content,
        refTo: comments[i].ref,
        _id: comments[i]._id,
      };
      if (postId) {
        comments[i].postId = postId;
      }
    }
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
