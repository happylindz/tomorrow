const nodemailer = require('nodemailer');

module.exports = (app) => {
  class Mail extends app.Service {
    constructor(...args) {
      super(...args);
      const config = this.app.config.mailConfig;
      this.transporter = nodemailer.createTransport(config);
    }
    async sendMail(renderOptions, options) {
      options.from = '"博客消息" <info@lindongzhou.com>';
      options.subject = '你在 lindongzhou.com 的留言收到消息回复';
      options.html = await this.ctx.renderView('email', renderOptions);
      this.transporter.sendMail(options, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
    }
  }
  return Mail;
};
