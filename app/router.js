'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/users', controller.users);
  // ssr pages
  router.get('/ssr/*', controller.ssr.index);

  // 采用middleware来处理_next路劲的请求，因此废除该controller
  // router.get('*', controller.next.index);
};
