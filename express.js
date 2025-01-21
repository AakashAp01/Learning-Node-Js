const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');
// app.use(express.static(publicPath));
app.get('/',(_,resp)=>{
    resp.sendFile(publicPath+'/index.html');
})
app.get('/about-us',(_,resp)=>{
    resp.sendFile(publicPath+'/about.html');
})
app.get('/profile',(_,resp)=>{

    const user = {
        name: 'Aakash Prajapati',
        age: 30,
        email: 'akashap@gmail.com',
        skills: ['Node.js','Express.js','MongoDB','React.js']
    }

    resp.render('profile',{user});
})

app.listen(3000)
