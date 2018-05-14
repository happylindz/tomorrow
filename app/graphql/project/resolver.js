module.exports = {
  Query: {
    projects(root, { page, size }, ctx) {
      if (page) {
        return ctx.connector.project.query(page, size);
      } else {
        return ctx.connector.project.queryAll();
      }
    }
  }
};