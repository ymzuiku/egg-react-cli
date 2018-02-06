'use strict';

// had enabled by egg
exports.static = true;
exports.io = {
  enable: true,
  package: 'egg-socket.io'
}

exports.mongodb = {
  enable: true,
  package: 'egg-mongodb'
}