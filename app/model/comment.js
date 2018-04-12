module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const CommentSchema = new Schema({
    name: { type: String },
    createdTime: { type: String, default: Date.now },
    email: { type: String },
    content: { type: String },
    ref: { type: Schema.ObjectId },
    postId: { type: Schema.ObjectId },
  });
  return mongoose.model('Comment', CommentSchema);
};
