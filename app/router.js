'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  app.resources('posts', '/api/posts', 'posts');
  app.resources('works', '/api/works', 'works');
  router.get('/:route', controller.index.route);
};
