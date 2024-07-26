const session = require('express-session')
module.exports = (app) => {
  app.use(session({
    secret : 'abcd', //암호화, 주기적으로 변경
    resave : false, //변경시에만 재저장
    saveUninitialized : true, //변경시 재초기화 없음
  }))
}