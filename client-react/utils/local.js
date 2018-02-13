var tag = 'temp_localKey'
function save(data) {
  // 把user和config保存到local
  if (window.document) {
    window.localStorage[tag] = JSON.stringify(data)
  }
}

function load(key) {
  // 如果本地有local
  if (window.document) {
    if (window.localStorage[tag]) {
      if (JSON.parse(window.localStorage[tag])) {
        var lastState = JSON.parse(window.localStorage[tag])
        return lastState
      }
    }
  } else {
    return undefined
  }
}

export {
  tag, load, save
}