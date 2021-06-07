'use strict';

const Next = require('next');
const NEXT = Symbol('Application#next');
module.exports = {
  get next() {
    if (!this[NEXT]) {
      this[NEXT] = Next(this.config.next);
    }
    return this[NEXT];
  },
};
