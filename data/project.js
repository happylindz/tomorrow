const mongoose = require('mongoose');
const project = require('./project.json');

const { Schema } = mongoose;
const ProjectSchema = new Schema({
  title: { type: String },
  imgUrl: { type: String },
  href: { type: String },
  content: { type: String },
});

const promise = mongoose.createConnection('mongodb://127.0.0.1:27017/blog', {
  useMongoClient: true,
});

promise.then((db) => {
  const Model = db.model('project', ProjectSchema);
  project.forEach((item) => {
    const instance = new Model(item);
    instance.save();
  });
});
