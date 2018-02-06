'use strict';

let path = require('path')
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517913427791_5823';

  // add your config here
  config.middleware = [];

  config.io = {
    init: { wsEngine: 'uws' },
  }
  
  config.mongodb = {
    app: true,
    agent: false,
    username: '',
    password: '',
    host: '127.0.0.1',
    port: '27017',
    db: 'test',
    query: ''
  }
  

  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'public/'),
    dynamic: true,
    preload: false,
    buffer: false, // 是否缓冲
    maxFiles: 5000,
  }

  return config;
};


