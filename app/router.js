'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  app.resources('post', '/api/post', 'post');
  app.resources('project', '/api/project', 'project');
  app.resources('article', '/api/article', 'article');

  router.get('/', controller.index.home);
  router.get('/project', controller.index.project);
  router.get('/about', controller.index.about);
  router.get('/archives', controller.index.archives);
  router.get('/article/:url', controller.index.article);
  router.get('/*', controller.index.route);
};
