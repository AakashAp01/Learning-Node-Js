const express = require('express');
const app = express();
const dbConn = require('./conn.js');
app.listen(3000);

app.get('/', async (req, resp) => {

    const db = await dbConn('school');
    const collection = db.collection('students');
    const result = await collection.find().toArray();
    if (result.length == 0) {
        throw new Error('Student not found');
    }
    resp.send(result);
})

app.get('/student/:name', async (req, resp) => {
    try {
        const db = await dbConn('school');
        const collection = db.collection('students');
        const result = await collection.find({ name: req.params.name }).toArray();
        if (result.length == 0) {
            throw new Error('Student not found');
        }
        resp.send(result);

    } catch (e) {
        resp.send({ error: e.message });
    }
})

 