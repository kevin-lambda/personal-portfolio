var fs = require("fs")
var dir = "./.cache/caches/gatsby-source-contentful"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}
