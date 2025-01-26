const express = require('express')
const app = express();
const { MongoClient }  = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "school";

// app.use(express.json());
app.listen(3000);

async function getCollection(collectionName){
  try{
        await client.connect();
        const db = client.db(database);
        return db.collection(collectionName);
  }catch(e){
    return e.message
  }
}

app.put('/update-student',async (req,resp)=>{
    try{
        const collection = await getCollection('students');  
        const result = await collection.find().toArray(); 
        resp.send(result);

    }catch(e){
        resp.send(e.message);
    }

});
