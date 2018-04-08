

module.exports = (app) => {
  class Project extends app.Service {
    async get() {
      const data = await this.ctx.model.Project.find({});
      return data;
    }
  }
  return Project;
};
