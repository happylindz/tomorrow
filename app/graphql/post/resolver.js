module.exports = {
  Query: {
    post(root, { url, _id }, ctx) {
      return ctx.connector.post.queryByUrl(url);
    },
    posts(root, { time, page, size }, ctx) {
      if (page) {
        return ctx.connector.post.query(page, size);
      } else {
        return ctx.connector.post.queryByTime(time, size);
      }
    }
  }
};