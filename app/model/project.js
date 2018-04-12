module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const ProjectSchema = new Schema({
    title: { type: String },
    href: { type: String },
    content: { type: String },
    contentType: { type: String },
  });
  return mongoose.model('Project', ProjectSchema);
};
