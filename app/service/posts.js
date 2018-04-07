const readFilePromise = require('fs-readfile-promise');
const path = require('path');
const marked = require('marked');

module.exports = (app) => {
  class Posts extends app.Service {
    async get() {
      const data = await this.ctx.model.Post.find({}, 'title cover url');
      return data;
    }

    async new() {
      const data = JSON.parse(await readFilePromise(path.resolve(__dirname, '../../data/posts.json')));
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        app.curl(`http://127.0.0.1:8080/${item.url}.md`).then((content) => {
          this.ctx.model.Post.create({
            url: item.url,
            content: marked(content.res.data.toString()),
            createdTime: new Date(),
            title: item.title,
            cover: item.cover,
          });
        });
      }
      return data;
    }
  }
  return Posts;
};
