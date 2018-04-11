

module.exports = () => {
  return async (ctx, next) => {
    const userId = ctx.cookies.get('userId');
    if (userId === undefined && ctx.path !== '/admin/login') {
      ctx.redirect('/admin/login');
    } else {
      await next();
    }
  };
};
