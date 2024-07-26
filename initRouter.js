
module.exports = async (app, connection) => {

  app.get('/',(req,res)=>{
    res.render('index.ejs')
  })

  app.post("/login",(req,res)=>{
    const userID= req.body['user-id']
    req.session.user_id = userID
    res.redirect('/add')
  })

  app.get("/add", async (req, res)=>{
    const query = 'select name, content from guestbook order by id desc'
    const [rows, fields] = await connection.query(query)
    const renderData = {rows}
    res.render('add.ejs', renderData)
  })

  app.post('/save', async (req,res)=>{
    const userID = req.session.user_id
    const content = req.body.content
    const query = 'insert into guestbook (name, content) values (?, ?)'
    await connection.query(query, [userID, content])
    res.redirect('/add')
  })

}