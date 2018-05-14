const moment = require('moment');

class CommentConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async queryMessage() {
    const comments = await this.ctx.service.message.queryAll('name createdTime content ref');
    return this.processComments(comments);
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

  async queryCommentsByPostId(postId) {
    const comments = await this.ctx.service.comment.queryByPostId('name createdTime content ref', postId);
    return this.processComments(comments, postId);
  }
}

module.exports = CommentConnector;
