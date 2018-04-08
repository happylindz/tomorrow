const mongoose = require('mongoose');
const post = require('./posts.json');
const axios = require('axios');
const marked = require('marked');

const { Schema } = mongoose;
const PostSchema = new Schema({
  url: { type: String },
  title: { type: String },
  cover: { type: String },
  createdTime: { type: Date, default: new Date() },
  content: { type: String },
});

const promise = mongoose.createConnection('mongodb://127.0.0.1:27017/blog', {
  useMongoClient: true,
});

promise.then((db) => {
  const Model = db.model('post', PostSchema);
  post.forEach((item) => {
    axios.get(`http://127.0.0.1:8080/${item.url}.md`).then((res) => {
      item.content = marked(res.data.toString());
      const instance = new Model(item);
      instance.save();
    });
  });
});
