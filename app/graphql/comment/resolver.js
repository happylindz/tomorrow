module.exports = {
  Query: {
    comments(root, { page, size, postId }, ctx) {
      if (postId) {
        return {
          comments: ctx.connector.comment.queryAllCommentsByPostId(postId)
        };
      } else {
        return ctx.connector.comment.queryComments(page, size);
      }
    },
    message(root, { page, size }, ctx) {
      if (page) {
        return ctx.connector.comment.queryMessages(page, size);
      } else {
        return {
          comments: ctx.connector.comment.queryAllMessages()
        };
      }
    }
  }
};