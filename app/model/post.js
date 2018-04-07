module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const PostSchema = new Schema({
    url: { type: String },
    title: { type: String },
    cover: { type: String },
    createdTime: { type: Date, default: new Date() },
    content: '',
  });
  return mongoose.model('Post', PostSchema);
};
