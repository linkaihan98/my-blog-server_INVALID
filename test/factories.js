'use strict';

// 为了简化单测，我们可以通过 factory-girl 模块来快速创建测试数据(详见https://eggjs.org/zh-cn/tutorials/sequelize.html)
const { factory } = require('factory-girl');

module.exports = app => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory;

  // 定义 user 和默认数据
  factory.define('user', app.model.User, {
    name: factory.sequence('User.name', n => `name_${n}`),
    age: 18,
  });
};
