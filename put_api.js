const express = require('express')
const app = express();
const { MongoClient }  = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "school";

app.use(express.json());
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
        const { query, update } = req.body; 
        if (!query || !update) {
        return resp.status(400).send({ error: "Query and update fields are required" });
        }
        const collection = await getCollection('students');  
        const result = await collection.updateOne(query, { $set: update })
        if(result.acknowledged == true){
            resp.send({message:'data updated successfully.'});
        }else{
            resp.send({message:result}); 
        }

    }catch(e){
        resp.send(e.message);
    }

});
