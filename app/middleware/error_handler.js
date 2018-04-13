module.exports = () => {
  return async function (ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx);
      const error = ctx.app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      ctx.body = {
        code: 1,
        message: error,
      };
      ctx.status = 200;
    }
  };
};
