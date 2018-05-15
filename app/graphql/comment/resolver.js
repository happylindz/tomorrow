module.exports = {
  Query: {
    comments(root, { page, size }, ctx) {
      return ctx.connector.comment.queryComments(page, size);
    },
    message(root, { page, size }, ctx) {
      return ctx.connector.comment.queryMessages(page, size);
    }
  }
};