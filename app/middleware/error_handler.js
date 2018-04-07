module.exports = () => {
  return async function (ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      const error = status === 500 && ctx.app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      ctx.body = {
        error,
      };
      ctx.status = status;
    }
  };
};
