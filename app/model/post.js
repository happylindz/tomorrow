const moment = require('moment');

module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const PostSchema = new Schema({
    url: { type: String, index: true, required: true, unique: true },
    title: { type: String, required: true },
    cover: { type: String },
    tags: { type: String, required: true },
    createdTime: { type: Date, requied: true },
    content: { type: String, required: true },
    desc: { type: String, required: true },
    index: [{ _id: false, tag: String, content: String, anchor: String }],
    readCount: { type: Number, default: 0 },
  });
  const date = PostSchema.virtual('date');
  date.get(function () {
    return moment(this.createdTime).format('YYYY-MM-DD');
  });

  const time = PostSchema.virtual('time');
  time.get(function() {
    return moment(this.createdTime).format('YYYY-MM-DD HH:mm:ss');
  });

  const year = PostSchema.virtual('year');
  year.get(function() {
    return moment(this.createdTime).format('YYYY');
  });

  const day = PostSchema.virtual('day');
  day.get(function() {
    return moment(this.createdTime).format('MM-DD');
  });
  return mongoose.model('Post', PostSchema);
};
