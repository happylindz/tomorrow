const moment = require('moment');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

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
  const date = MessageSchema.virtual('date');
  date.get(function () {
    return moment(this.createdTime).format('YYYY-MM-DD');
  });

  const time = MessageSchema.virtual('time');
  time.get(function() {
    return moment(this.createdTime).format('YYYY-MM-DD HH:mm:ss');
  });

  const year = MessageSchema.virtual('year');
  year.get(function() {
    return moment(this.createdTime).format('YYYY');
  });

  const day = MessageSchema.virtual('day');
  day.get(function() {
    return moment(this.createdTime).format('MM-DD');
  });
  MessageSchema.plugin(mongooseLeanVirtuals);
  return mongoose.model('Message', MessageSchema);
};
