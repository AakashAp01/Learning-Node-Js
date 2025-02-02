const mysql = require('mysql');

const con = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'xyz' 
})
con.connect((error)=>{
    if(error) console.log('Getting error in connection',error);
    console.log('Connected to the Database')
})

con.query('SELECT * FROM employee',(error,result)=>{
    if(!error)console.log(result);
})