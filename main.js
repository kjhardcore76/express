const express = require('express')
/* ------------------------------------------ */
const app = express()

const initApp = async () => {
  require('./initBodyParser')(app)
  require('./initEjs')(app)
  require('./initSession')(app)
  const connection = await require('./initMysql')()
  require('./initRouter')(app, connection)
  app.listen(2000, () => { console.log('app start'); })
}

initApp()