
class InfoConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async getInfo() {
    const res = await this.ctx.service.info.query('name info html infoType');
    res.comments = await this.ctx.connector.comment.queryMessage();
    return res;
  }
}

module.exports = InfoConnector;