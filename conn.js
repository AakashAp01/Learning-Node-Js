const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports = async function getConn(dbName) {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Select the database
        const db = client.db(dbName);
 
        // Return the database instance
        return db;
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error;
    }
};
 