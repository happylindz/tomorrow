module.exports = {
  Query: {
    post(root, { url, _id }, ctx) {
      return ctx.connector.post.queryPostByUrl(url);
    },
    posts(root, { time, page, size }, ctx) {
      if (page) {
        return ctx.connector.post.queryPosts(page, size);
      } else if (time) {
        return ctx.connector.post.queryPostsByTime(time);
      } else {
        return ctx.connector.post.queryAll();
      }
    }
  }
};