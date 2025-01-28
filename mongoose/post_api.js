require('./config.js');
const StudentsModel = require('./model/student.js')

const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());
 
app.post('/add-student',async (req,resp)=>{
    try {
        const data = new StudentsModel(req.body);
        const result = await data.save(); 
        resp.status(201).send({ success: true, message: "Student added successfully", data: result }); 
    } catch (error) {
        resp.status(500).send({ success: false, message: "An error occurred", error: error.message });
    }
});

