
const { parse } = require('../util/parse.js');

module.exports = (app) => {
  class Post extends app.Service {
    query(page = 1, size = 10) {
      return this.ctx.model.Post.find({}).sort({ createdTime: -1 }).skip((page - 1) * size).limit(size);
    }

    queryByTime(time, size) {
      if (time && time !== '0') {
        return this.ctx.model.Post.find({ createdTime: { $lt: time }}).sort({ createdTime: -1 }).limit(size);
      } else {
        return this.ctx.model.Post.find({}).sort({ createdTime: -1 }).limit(size);
      }
    }

    queryAll() {
      return this.ctx.model.Post.find({}).sort({ createdTime: -1 });
    }

    async queryNext(createdTime) {
      const data = await this.ctx.model.Post.find({ createdTime: { $lt: createdTime }}).sort({ createdTime: -1 }).limit(1);
      return data[0];
    }
    async queryPrevious(createdTime, query) {
      const data = await this.ctx.model.Post.find({ createdTime: { $gt: createdTime }}).sort({ createdTime: 1 }).limit(1);
      return data[0];
    }

    count() {
      return this.ctx.model.Post.count();
    }

    async addCommentCount(url) {
      const post = await this.ctx.model.Post.findOne({ url }, 'commentCount');
      const count = post.commentCount || 0;
      const _id = post._id;
      return this.ctx.model.Post.update({ _id }, { commentCount: count + 1 });
    }

    async queryByUrl(url) {
      await this.addCommentCount(url);
      return this.ctx.model.Post.findOne({ url });
    }

    queryPostById(_id) {
      return this.ctx.model.Post.findOne({ _id });
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
