
const config = require('../../secret/config.json');

module.exports = () => {
  return async (ctx, next) => {
    const { userId } = ctx.session;
    if (userId !== config.appKey && ctx.path !== '/admin/login') {
      ctx.redirect('/admin/login');
    } else if (userId === config.appKey && ctx.path === '/admin/login') {
      ctx.redirect('/admin/info');
    } else {
      await next();
    }
  };
};
