module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const InfoSchema = new Schema({
    info: { type: String },
    links: [{ _id: false, name: String, href: String }],
  });
  return mongoose.model('Info', InfoSchema);
};
