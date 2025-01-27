const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client =new MongoClient(url);
const mongodb = require('mongodb');
const express = require('express');
const app= express();

app.use(express.json());
app.listen(3000,(error)=>{
    console.log('app is running on 3000 port');
})

async function getCollection(collectionName) {
    await client.connect();
    const db = client.db('school');
    return db.collection(collectionName);
}

app.delete('/delete-student/:id',async (req,resp)=>{
    
    const collection = await getCollection('students');
    const result = await collection.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result);

})


