'use strict';

let path = require('path')
module.exports = appInfo => {
  const config = exports = {};
  config.static = {
    maxAge: 31536000,
    buffer: false, // 是否缓冲
  }
  return config;
};
