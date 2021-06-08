'use strict';

const { DATABASE_UNITTEST, USERNAME, PASSWORD, HOST, PORT } = require('./secret');

// 单测用数据库
exports.sequelize = {
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
  },
  database: DATABASE_UNITTEST,
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
};
