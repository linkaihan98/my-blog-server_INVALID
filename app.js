'use strict';

module.exports = app => {
  // next prepare好再启动服务
  app.next.prepare().then(() => {
    app.beforeStart(() => {
      process.on('unhandledRejection', () => {
      });
      process.on('uncaughtException', () => {
      });
    });
  });
};
