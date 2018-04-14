

module.exports = () => {
  return async (ctx, next) => {
    const { userId } = ctx.session;
    if (userId !== 'admin' && ctx.path !== '/admin/login') {
      ctx.redirect('/admin/login');
    } else if(userId === 'admin' && ctx.path === '/admin/login') {
      ctx.redirect('/admin/info');
    } else {
      await next();
    }
  };
};
