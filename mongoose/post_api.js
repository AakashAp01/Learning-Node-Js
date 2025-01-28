require('./config.js');
const StudentsModel = require('./model/student.js')

const express = require('express');
const app = express();
app.listen(3000);


app.get('/add-student',async (req,resp)=>{
    resp.send(await StudentsModel.find());
});

