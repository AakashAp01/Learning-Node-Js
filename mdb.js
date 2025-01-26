const getConn = require('./conn.js'); // Import the connection function

(async () => {
    try {
        // Connect to the database and specify the name
        const db = await getConn('school'); 

        // Query the database
        const data = await db.collection('students').find().toArray();

        // Log the results
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
})();
