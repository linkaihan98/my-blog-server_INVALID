'use strict';

const { parse } = require('url');

module.exports = (_options, app) => async (ctx, next) => {
  const { path, req, res } = ctx;
  if (/\/_next\//.test(path)) {
    const parsedUrl = parse(req.url, true);
    ctx.status = 200;
    if (/\.js$/.test(path)) {
      ctx.set('Content-Type', 'application/javascript');
    }
    if (/\.css$/.test(path)) {
      ctx.set('Content-Type', 'text/css');
    }
    const handle = app.next.getRequestHandler();
    await handle(req, res, parsedUrl);
  }
  await next();
};
