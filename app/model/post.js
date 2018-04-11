module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const PostSchema = new Schema({
    url: { type: String },
    title: { type: String },
    cover: { type: String },
    tags: { type: String },
    createdTime: { type: String },
    content: { type: String },
  });
  return mongoose.model('Post', PostSchema);
};
