var { exec } = require('child_process')
var fs = require('fs')
var p = require('path')
module.exports = {
  compile (path, out, opts, callback) {

    const items = fs.readdirSync(path)
    let ignores = []
    let cmd = `babel ${path} --out-dir ${out}`

    if (opts && opts.include) {
      ignores = items.filter(i => opts.include.indexOf(i) < 0)
    }

    if (ignores && ignores.length) {
      cmd = `babel ${path} --out-dir ${out} --ignore ${ignores.join(',')}`
    }
    
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failed to Build backend: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      callback(error)
    })
  }
}