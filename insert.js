const conn = require('./conn.js');

function insertData(dbName, collectionName, data) {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await conn(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.insertMany(data);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

insertData('school', 'students', [
    { name: 'John', class: 3 },
    { name: 'Jane', class: 6 },
    { name: 'Doe', class: 2 },
]).then(result => {
    console.log('Result:', result);
}).catch(error => {
    console.error('Error:', error);
});