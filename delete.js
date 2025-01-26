const dbConn = require('./conn.js');

async function deleteData(dbName, collectionName, query) {
  try {
    const db = await dbConn(dbName);
    const collection = db.collection(collectionName); 
    const result = await collection.deleteMany(query); 
    console.log(`Deleted ${result.deletedCount} records matching ${JSON.stringify(query)}.`);
  } catch (error) {
    console.error('Error deleting data:', error); 
  }
}

deleteData('school', 'students', { class: 15 });
