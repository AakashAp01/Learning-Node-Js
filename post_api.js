const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();  

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

app.listen(3000);
app.use(express.json());
async function getCollection(collectionName){

    try{
        await client.connect();
        const db = client.db('school');
        const collection = db.collection(collectionName);
        return collection;
    }catch(e){
        console.log('Failed to connect to the database:', e.message);
    }

}

app.post('/insert-student', async (req, resp) => {
    try{
        const collection =  await getCollection('students');
      
        const result = await collection.insertOne(req.body);

        resp.send(result);

    }catch(e){

        resp.send({'Getting error': e.message});
    }
})