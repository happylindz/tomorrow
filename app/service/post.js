
const { parse } = require('../util/parse.js');

module.exports = (app) => {
  class Post extends app.Service {
    query(query, page, size = 10) {
      return this.ctx.model.Post.find({}, query).sort({ createdTime: -1 }).skip((page - 1) * size).limit(size);
    }

    queryByTime(query, time, size) {
      if (time && time !== '0') {
        return this.ctx.model.Post.find({ createdTime: { $lt: time }}).sort({ createdTime: -1 }).limit(size);
      } else {
        return this.ctx.model.Post.find({}, query).sort({ createdTime: -1 }).limit(size);
      }
    }
    queryIdByUrl(url) {
      return this.ctx.model.Post.findOne({ url }, '_id');
    }

    queryAll(query) {
      return this.ctx.model.Post.find({}, query).sort({ createdTime: -1 });
    }

    async queryNext(createdTime, query) {
      const data = await this.ctx.model.Post.find({ createdTime: { $lt: createdTime }}, query).sort({ createdTime: -1 }).limit(1);
      return data[0];
    }
    async queryPrevious(createdTime, query) {
      const data = await this.ctx.model.Post.find({ createdTime: { $gt: createdTime }}, query).sort({ createdTime: 1 }).limit(1);
      return data[0];
    }

    count() {
      return this.ctx.model.Post.count();
    }

    async addCount(url) {
      const data = await this.ctx.model.Post.find({ url }, '_id count').limit(1);
      const count = data[0].count || 0;
      const _id = data[0]._id;
      return this.ctx.model.Post.update({ _id }, { count: count + 1 });
    }

    async queryArticle(url) {
      await this.addCount(url);
      return this.ctx.model.Post.findOne({ url });
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
