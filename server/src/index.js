const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')
const settings = require('../../share/config')

const app = new Koa()

app.use(serve(path.join(__dirname, '../../dist')))

app.listen(settings.port, () => {
  console.log(`listening on port ${settings.port}`)
})
