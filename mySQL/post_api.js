const express = require('express');
const app = express();
app.listen(3000);
const conn = require('./config');
app.use(express.json())
app.post('/add',(req,resp)=>{

    // data = [
    //     {   
    //         name:'jaydip pipaliya',
    //         salary:5000,
    //     }
    // ]

    data = req.body;

    conn.query('INSERT INTO employee SET ?',data,(error,result,fields)=>{
        if(error) resp.send(error);
        resp.send(result);
    })

})