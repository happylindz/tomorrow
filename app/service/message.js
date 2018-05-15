
module.exports = (app) => {
  class Message extends app.Service {
    count() {
      return this.ctx.model.Message.count();
    }
    query(page, size = 10) {
      return this.ctx.model.Message.find({}).sort({ createdTime: -1 }).skip((parseInt(page, 10) - 1) * size).limit(parseInt(size, 10));
    }

    queryAll() {
      return this.ctx.model.Message.find({}).sort({ createdTime: 1 }).lean({ virtuals: true });
    }

    queryById(_id) {
      return this.ctx.model.Message.findOne({ _id });
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
  }
  return Message;
};
