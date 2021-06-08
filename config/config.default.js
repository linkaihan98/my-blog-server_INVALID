/* eslint valid-jsdoc: "off" */

'use strict';

const { DATABASE, USERNAME, PASSWORD, HOST, PORT } = require('./secret');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1622980630559_7630';

  // add your middleware config here
  config.middleware = [ 'ssr' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // sequelize 配置(详见https://eggjs.org/zh-cn/tutorials/sequelize.html)
  config.sequelize = {
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4',
    },
    database: DATABASE,
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
  };

  return {
    ...config,
    ...userConfig,
  };
};
