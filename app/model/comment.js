const moment = require('moment');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

module.exports = (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const CommentSchema = new Schema({
    name: { type: String, required: true },
    createdTime: { type: Date, default: Date.now() },
    email: { type: String, required: true },
    content: { type: String, required: true },
    refTo: { type: Schema.Types.ObjectId, ref: 'comments', default: null },
    postId: { type: Schema.Types.ObjectId, ref: 'posts', required: true },
  });
  const date = CommentSchema.virtual('date');
  date.get(function () {
    return moment(this.createdTime).format('YYYY-MM-DD');
  });

  const time = CommentSchema.virtual('time');
  time.get(function() {
    return moment(this.createdTime).format('YYYY-MM-DD HH:mm:ss');
  });

  const year = CommentSchema.virtual('year');
  year.get(function() {
    return moment(this.createdTime).format('YYYY');
  });

  const day = CommentSchema.virtual('day');
  day.get(function() {
    return moment(this.createdTime).format('MM-DD');
  });
  CommentSchema.plugin(mongooseLeanVirtuals);
  return mongoose.model('Comment', CommentSchema);
};
