const mail = require('../util/mail');

module.exports = (app) => {
  class Message extends app.Service {
    count() {
      return this.ctx.model.Message.count();
    }
    query(query, page, size = 10) {
      return this.ctx.model.Message.find({}, query).sort({ createdTime: -1 }).skip((parseInt(page, 10) - 1) * size).limit(parseInt(size, 10));
    }

    queryAll(query) {
      return this.ctx.model.Message.find({}, query).sort({ createdTime: -1 });
    }

    queryById(query, _id) {
      return this.ctx.model.Message.find({ _id }, query);
    }

    add(data) {
      return this.ctx.model.Message.create(data);
    }

    update(_id, data) {
      return this.ctx.model.Message.update({ _id }, data);
    }

    delete(_id) {
      return this.ctx.model.Message.remove({ _id });
    }

    async sendEmail(renderOptions, email) {
      const tpl = await this.ctx.renderView('email', renderOptions);
      const mailOptions = {
        to: email,
        html: tpl,
      };
      mail(mailOptions);
    }
  }
  return Message;
};
