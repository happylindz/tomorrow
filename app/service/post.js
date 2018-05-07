
const { parse } = require('../util/parse.js');

module.exports = (app) => {
  class Post extends app.Service {
    query(query, page, size = 10) {
      page = parseInt(page, 10);
      size = parseInt(size, 10);
      return this.ctx.model.Post.find({}, query).sort({ createdTime: -1 }).skip((page - 1) * size).limit(size);
    }

    queryAll(query) {
      return this.ctx.model.Post.find({}, query).sort({ createdTime: -1 });
    }

    queryNext(createdTime, query) {
      return this.ctx.model.Post.find({ createdTime: { $lt: createdTime }}, query).sort({ createdTime: -1 }).limit(1);
    }
    queryPrevious(createdTime, query) {
      return this.ctx.model.Post.find({ createdTime: { $gt: createdTime }}, query).sort({ createdTime: 1 }).limit(1);
    }

    count() {
      return this.ctx.model.Post.count();
    }

    queryArticle(url) {
      return this.ctx.model.Post.find({ url }, 'content index createdTime tags title').limit(1);
    }

    queryArticleById(_id, query) {
      return this.ctx.model.Post.findById(_id, query).limit(1);
    }

    add(data) {
      const { html, index, desc } = parse(data.content);
      data.content = html;
      data.index = index;
      data.desc = desc;
      return this.ctx.model.Post.create(data);
    }

    update(_id, data) {
      if (data.content !== '') {
        const { html, index, desc } = parse(data.content);
        data.content = html;
        data.index = index;
        data.desc = desc;
      } else {
        delete data.content;
      }
      return this.ctx.model.Post.update({ _id }, data);
    }

    delete(_id) {
      return this.ctx.model.Post.remove({ _id });
    }
  }
  return Post;
};
