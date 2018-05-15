const { parse2 } = require('../util/parse.js');


module.exports = (app) => {
  class Info extends app.Service {
    query() {
      return this.ctx.model.Info.findOne({});
    }

    add(data) {
      if (data.infoType === 'markdown') {
        data.html = parse2(data.info);
      } else if (data.infoType === 'normal') {
        data.html = data.info;
      }
      return this.ctx.model.Info.create(data);
    }

    update(_id, data) {
      if (data.infoType === 'markdown') {
        data.html = parse2(data.info);
      } else if (data.infoType === 'normal') {
        data.html = data.info;
      }
      return this.ctx.model.Info.update({ _id }, data);
    }
  }
  return Info;
};
