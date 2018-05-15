const mail = require('../util/mail');

module.exports = (app) => {
  class Comment extends app.Service {
    count() {
      return this.ctx.model.Comment.count();
    }

    query(page, size = 10) {
      return this.ctx.model.Comment.find({}).sort({ createdTime: -1 }).skip((parseInt(page, 10) - 1) * size).limit(parseInt(size, 10));
    }

    queryCountByPostId(postId) {
      return this.ctx.model.Comment.find({ postId }).count();
    }

    queryByPostId(postId) {
      return this.ctx.model.Comment.find({ postId }).sort({ createdTime: 1 });
    }

    queryById(_id) {
      return this.ctx.model.Comment.findOne({ _id });
    }

    add(data) {
      return this.ctx.model.Comment.create(data);
    }

    update(_id, data) {
      return this.ctx.model.Comment.update({ _id }, data);
    }

    delete(_id) {
      return this.ctx.model.Comment.remove({ _id });
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
  return Comment;
};
