module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const MessageSchema = new Schema({
    name: { type: String, required: true },
    createdTime: { type: Date, default: Date.now() },
    email: { type: String, required: true },
    content: { type: String, required: true },
    refTo: { type: Schema.Types.ObjectId, ref: 'messages', default: null },
  });
  return mongoose.model('Message', MessageSchema);
};
