
module.exports = (app) => {
  class Works extends app.Service {
    async get() {
      const data = await this.ctx.model.Works.find({});
      return data;
    }
  }
  return Works;
};
