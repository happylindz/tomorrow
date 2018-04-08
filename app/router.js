'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  app.resources('posts', '/api/posts', 'posts');
  app.resources('project', '/api/project', 'project');
  router.get('/:route', controller.index.route);
};
