var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
/*server.use(jsonServer.defaults)
server.use(jsonServer.router('db.json'))*/
server.listen(3000, function () {
  console.log('JSON Server is running')
})
