module.exports = (app) => {
  class Post extends app.Service {
    async get({ type = 'ALL', query = '', page = 1 }) {
      let data = null;
      if (type === 'ALL') {
        data = await this.queryAllData(query);
      } else if (type === 'PART') {
        data = await this.queryPartData(query, page);
      }
      return data;
    }

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
  }
  return Post;
};
