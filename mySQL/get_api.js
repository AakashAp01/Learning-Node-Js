const express = require('express');
const conn = require('./config.js');  
const app  =  express();


app.get('/get-user',(req,resp)=>{
    conn.query('SELECT * FROM employee',(e,r)=>{
        if(!e) resp.send(r);
        resp.send(e);
    })
})
app.listen(3000);