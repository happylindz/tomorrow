const { parse2 } = require('../util/parse.js');


module.exports = (app) => {
  class Project extends app.Service {
    queryAll() {
      return this.ctx.model.Project.find({}).sort({ _id: -1 });
    }

    count() {
      return this.ctx.model.Project.count();
    }

    query(query, page, size = 10) {
      return this.ctx.model.Project.find({}, query).sort({ _id: -1 }).skip((parseInt(page, 10) - 1) * size).limit(parseInt(size, 10));
    }

    add(data) {
      if (data.contentType === 'markdown') {
        data.html = parse2(data.content);
      } else if (data.contentType === 'normal') {
        data.html = data.content;
      }
      return this.ctx.model.Project.create(data);
    }

    update(_id, data) {
      if (data.contentType === 'markdown') {
        data.html = parse2(data.content);
      } else if (data.contentType === 'normal') {
        data.html = data.content;
      }
      return this.ctx.model.Project.update({ _id }, data);
    }

    delete(_id) {
      return this.ctx.model.Project.remove({ _id });
    }
  }
  return Project;
};
