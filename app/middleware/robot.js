

module.exports = (options) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-aget') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
    } else {
      await next();
    }
  };
};
