'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  app.resources('post', '/api/post', 'post');
  app.resources('project', '/api/project', 'project');
  router.get('/', controller.index.route);
  router.get('/:route', controller.index.route);
};
