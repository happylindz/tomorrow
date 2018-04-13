module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const InfoSchema = new Schema({
    name: { type: String, required: true },
    info: { type: String, required: true },
    html: { type: String, required: true },
    infoType: {
      type: String,
      enum: {
        values: ['markdown', 'normal'],
        message: '`${PATH}` 是 `${VALUE}`, 只支持 markdown 或普通文本',
        required: true,
      },
    },
  });
  return mongoose.model('Info', InfoSchema);
};
