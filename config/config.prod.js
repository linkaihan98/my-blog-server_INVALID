'use strict';

module.exports = () => {
  const config = {};
  config.next = {
    dev: false,
    dir: './ssr',
  };
  return {
    ...config,
  };
};
