module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const ProjectSchema = new Schema({
    title: { type: String, required: true },
    href: { type: String, required: true },
    content: { type: String, required: true },
    contentType: {
      type: String,
      enum: {
        values: ['markdown', 'normal'],
        message: '`${PATH}` 是 `${VALUE}`, 只支持 markdown 或普通文本',
        required: true,
      },
    },
    html: { type: String },
  });
  return mongoose.model('Project', ProjectSchema);
};
