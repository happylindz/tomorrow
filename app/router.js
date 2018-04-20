
module.exports = (app) => {
  const { router, controller } = app;
  app.resources('post', '/api/post', 'post');
  app.resources('project', '/api/project', 'project');
  app.resources('article', '/api/article', 'article');

  router.get('', controller.index.home);
  router.get('/project', controller.index.project);
  router.get('/about', controller.index.about);
  router.get('/archives', controller.index.archives);
  router.get('/article/:url', controller.index.article);

  app.resources('admin_post', '/admin/api/post', 'adminPost');
  app.resources('admin_project', '/admin/api/project', 'adminProject');
  app.resources('admin_comment', '/admin/api/comment', 'adminComment');
  app.resources('admin_info', '/admin/api/info', 'adminInfo');

  router.get('/admin/login', controller.admin.login);
  router.post('/admin/login', controller.admin.check);
  router.get('/admin/logout', controller.admin.logout);
  router.all('/admin', controller.admin.route);
  router.all('/admin/post', controller.admin.route);
  router.all('/admin/info', controller.admin.route);
  router.all('/admin/project', controller.admin.route);
  router.all('/admin/comment', controller.admin.route);
};
