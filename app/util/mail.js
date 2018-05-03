
const nodemailer = require('nodemailer');
const emailOptions = require('../../secret/config.json').email;

let transporter = nodemailer.createTransport(emailOptions);

module.exports = function(mailOptions) {
  mailOptions.from = '"博客消息" <info@lindongzhou.com>';
  mailOptions.subject = '你在 lindonghzou.com 的留言收到消息回复';
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};
