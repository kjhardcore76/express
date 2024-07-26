const ejs = require('ejs')
module.exports = (app) => {
  app.set('views', __dirname+'/views')
  app.set('view engines', 'ejs')
  app.engine('ejs', ejs.renderFile)
}

