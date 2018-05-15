
class ProjectConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async query(page = 1, size = 10) {
    page = parseInt(page, 10);
    size = parseInt(size, 10);
    const data = {
      projects: await this.ctx.service.project.query(page, size),
      total: await this.ctx.service.project.count(),
      page
    };
    return data;
  }
  async queryAll() {
    const projects = await this.ctx.service.project.queryAll();
    return {
      projects,
    };
  }
}

module.exports = ProjectConnector;
