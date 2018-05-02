
module.exports = (app) => {
  class Comment extends app.Service {
    count() {
      return this.ctx.model.Comment.count();
    }

    query(query, page, size = 10) {
      return this.ctx.model.Comment.find({}, query).sort({ createdTime: -1 }).skip((parseInt(page, 10) - 1) * size).limit(parseInt(size, 10));
    }

    queryByArticle(query, postId) {
      return this.ctx.model.Comment.find({ postId }, query).sort({ createdTime: 1 });
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
  }
  return Comment;
};
