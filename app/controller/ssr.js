'use strict';

const Controller = require('egg').Controller;

class SSRController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { req, res } = ctx;
    ctx.body = await app.next.renderToHTML(req, res, '/');
  }
}
module.exports = SSRController;
