const dbCon = require('./conn.js');


function updateData(dbName , collectionName, query,update){

    return new Promise(async(resolve, reject)=>{

        try{
            const db = await dbCon(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.updateOne(query , update);
            resolve(result);
        }catch(error){
            reject(error);
        }

    });

};

updateData('school','students',{name:'akash prajapati'},{$set:{name:'akash',class:15}}).then(result=>{
    console.log('Result:',result);
}).catch(error=>{
    console.error('Error:',error);
});




