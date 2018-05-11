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
    count: { type: Number, default: 0 },
  });
  const day = PostSchema.virtual('day');
  day.get(function () {
    return moment(this.createdTime).format('YYYY-MM-DD');
  });
  return mongoose.model('Post', PostSchema);
};
