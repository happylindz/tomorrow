module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const ProjectSchema = new Schema({
    title: { type: String, required: true },
    href: { type: String, required: true },
    content: { type: String, required: true },
    createdTime: { type: Date },
    contentType: {
      type: String,
      enum: {
        values: ['markdown', 'normal'],
        /* eslint-disable */
        message: '`${PATH}` 是 `${VALUE}`, 只支持 markdown 或普通文本',
        /* eslint-enable */
        required: true,
      },
    },
    html: { type: String },
  });
  ProjectSchema.pre('save', function (next) {
    this.createdTime = Date.now();
    next();
  });
  ProjectSchema.pre('findOneAndUpdate', function(next) {
    this.update({}, { $set: { createdTime: Date.now() }});
    next();
  });
  return mongoose.model('Project', ProjectSchema);
};
