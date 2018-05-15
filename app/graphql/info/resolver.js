module.exports = {
  Query: {
    info(root, _, ctx) {
      return ctx.connector.info.getInfo();
    }
  }
};