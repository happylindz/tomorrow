module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const WorksSchema = new Schema({
    title: { type: String },
    imgUrl: { type: String },
    href: { type: String },
    content: { type: String },
  });
  return mongoose.model('Works', WorksSchema);
};
