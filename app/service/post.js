module.exports = (app) => {
  class Post extends app.Service {
    async queryPartData(query, page) {
      const data = {
        postsData: await this.ctx.model.Post.find({}, query).skip((page - 1) * 10).limit(10),
        total: await this.ctx.model.Post.count(),
        page,
      };
      return data;
    }

    async queryAllData(query) {
      const data = {
        postsData: await this.ctx.model.Post.find({}, query),
        total: await this.ctx.model.Post.count(),
      };
      return data;
    }

    async queryArticleByUrl(url) {
      const html = await this.ctx.model.Post.find({ url }, 'content').limit(1);
      return html;
    }
  }
  return Post;
};
