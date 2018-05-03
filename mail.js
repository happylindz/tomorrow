
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

let transporter = nodemailer.createTransport({
  host: 'smtp.exmail.qq.com',
  port: 465,
  secureConnection: true,
  auth: {
    user: 'info@lindongzhou.com',
  }
});

let mailOptions = {
  from: '"博客消息" <info@lindongzhou.com>', // sender address
  to: '295193706@qq.com', // list of receivers
  subject: '你好，可以跟你交个朋友吗？', // Subject line
  html: fs.createReadStream(path.resolve(__dirname, 'email.html')) // 流
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});