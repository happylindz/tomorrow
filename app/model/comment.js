module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const CommentSchema = new Schema({
    name: { type: String, required: true },
    createdTime: { type: Date, default: Date.now() },
    email: { type: String, required: true },
    content: { type: String, required: true },
    ref: { type: Schema.Types.ObjectId, ref: 'comments' },
    postId: { type: Schema.Types.ObjectId, ref: 'posts', required: true },
  });
  return mongoose.model('Comment', CommentSchema);
};
