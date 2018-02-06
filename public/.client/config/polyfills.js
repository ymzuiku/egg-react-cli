'use strict';

var bluebird = require("bluebird");
window.Promise = bluebird
require('whatwg-fetch');
Object.assign = require('object-assign');
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
var localKey = 'temp_localKey'
function localSave(data) {
  // 把user和config保存到local
  if (window.document) {
    window.localStorage[localKey] = JSON.stringify(data)
  }
}

function localLoad(key) {
  // 如果本地有local
  if (window.document) {
    if (window.localStorage[localKey]) {
      if (JSON.parse(window.localStorage[localKey])) {
        var lastState = JSON.parse(window.localStorage[localKey])
        return lastState
      }
    }
  } else {
    return undefined
  }
}

// 全局补充
window.localSave = localSave
window.localLoad = localLoad
window.__dev = process.env.NODE_ENV === 'development'
window.__prod = process.env.NODE_ENV === 'production'