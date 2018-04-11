'use strict';

module.exports = (app) => {
  const { router, controller } = app;
  app.resources('post', '/api/post', 'post');
  app.resources('project', '/api/project', 'project');
  app.resources('article', '/api/article', 'article');

  // admin
  app.resources('admin_post', '/api/admin/post', 'adminPost');
  app.resources('admin_project', '/api/admin/project', 'adminProject');
  app.resources('admin_comment', '/api/admin/comment', 'adminComment');
  app.resources('admin_about', '/api/admin/about', 'adminAbout');

  router.get('/', controller.index.home);
  router.get('/project', controller.index.project);
  router.get('/about', controller.index.about);
  router.get('/archives', controller.index.archives);
  router.get('/article/:url', controller.index.article);
  router.get('/admin', controller.admin.route);
  router.get('/admin/login', controller.admin.login);
  // router.get('/admin/logout', controller.admin.logout);
  router.get('/*', controller.index.route);
};
