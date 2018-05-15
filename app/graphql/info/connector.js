
class InfoConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async getInfo() {
    const res = await this.ctx.service.info.query();
    res.comments = await this.ctx.connector.comment.queryAllMessages();
    return res;
  }
}

module.exports = InfoConnector;