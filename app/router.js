
module.exports = (app) => {
  const { router, controller } = app;

  // 首页路由跳转，用于服务端渲染
  router.get('', controller.index.home);
  router.get('/project', controller.index.project);
  router.get('/about', controller.index.about);
  router.get('/archives', controller.index.archives);
  router.get('/article/:url', controller.index.article);

  // 管理后台登录
  router.get('/admin/login', controller.admin.login);
  router.post('/admin/login', controller.admin.check);
  router.get('/admin/logout', controller.admin.logout);

  // 管理后台界面
  router.get('/admin', controller.admin.route);
  router.get('/admin/post', controller.admin.route);
  router.get('/admin/info', controller.admin.route);
  router.get('/admin/project', controller.admin.route);
  router.get('/admin/comment', controller.admin.route);
  router.get('/admin/message', controller.admin.route);

  // 公共接口
  app.resources('comment', '/api/comment', 'comment');
  app.resources('message', '/api/message', 'message');

  // 管理员接口
  app.resources('post', '/api/post', 'post');
  app.resources('project', '/api/project', 'project');
  app.resources('info', '/api/info', 'info');
};
