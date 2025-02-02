const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'xyz'
});

conn.connect((error)=>{
    if(error)console.log('getting error in config file in data base conection',error) 
})
module.exports = conn;