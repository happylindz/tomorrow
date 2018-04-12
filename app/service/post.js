const parse = require('../util/parse.js');

module.exports = (app) => {
  class Post extends app.Service {
    async queryPartData(query, page, size = 10) {
      page = parseInt(page, 10);
      size = parseInt(size, 10);
      const data = {
        postsData: await this.ctx.model.Post.find({}, query).sort({ createdTime: -1 }).skip((page - 1) * size).limit(size),
        total: await this.ctx.model.Post.count(),
        page,
      };
      return data;
    }

    async queryAllData(query) {
      const data = {
        postsData: await this.ctx.model.Post.find({}, query).sort({ createdTime: -1 }),
        total: await this.ctx.model.Post.count(),
      };
      return data;
    }

    async queryArticleByUrl(url) {
      const html = await this.ctx.model.Post.find({ url }, 'content').limit(1);
      return html;
    }

    async add(data) {
      const { html, index, desc } = parse(data.content);
      data.content = html;
      data.index = index;
      data.desc = desc;
      await this.ctx.model.Post.create(data);
    }

    async update(id, data) {
      if (data.content !== '') {
        const { html, index, desc } = parse(data.content);
        data.content = html;
        data.index = index;
        data.desc = desc;
      } else {
        delete data.content;
      }
      return this.ctx.model.Post.update({ _id: id }, data);
    }

    async delete(id) {
      return this.ctx.model.Post.remove({ _id: id });
    }
  }
  return Post;
};
