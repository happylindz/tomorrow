

module.exports = (app) => {
  class Project extends app.Service {
    async query(query) {
      return this.ctx.model.Project.find({}, query);
    }

    async add(data) {
      return this.ctx.model.Project.create(data);
    }

    async update(id, data) {
      return this.ctx.model.Project.update({ _id: id }, data);
    }

    async delete(id) {
      return this.ctx.model.Project.remove({ _id: id });
    }
  }
  return Project;
};
