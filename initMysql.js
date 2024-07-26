const mysql = require('mysql2/promise')

module.exports = async () => {
  const pool = mysql.createPool({
    host: "svc.sel4.cloudtype.app",
    port: 30693,
    user: "root",
    password: process.env.MYSQL_PW,
    database: "mydb",
    connectionLimit: 5,
  })
  await pool.getConnection()
  return pool
}




