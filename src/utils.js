const fs = require('fs')

exports.readfile = (dir) => {
	console.log(dir)
  return new Promise((resolve, reject) => {
    fs.readFile(dir, (err, doc) => {
      if (err) {
        reject(err)
        return
      }
      resolve(doc)
    })
  })
}

exports.writefile = (dir, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dir, data, (err, doc) => {
      if (err) {
        reject(err)
        return
      }
      resolve(doc)
    })
  })
}
