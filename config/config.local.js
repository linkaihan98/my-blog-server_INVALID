'use strict';

module.exports = () => {
  const config = {};
  config.next = {
    dev: true,
    dir: './ssr',
  };
  return {
    ...config,
  };
};
