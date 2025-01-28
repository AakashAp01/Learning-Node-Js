const express = require('express');
const app = express();
require('./config');
const StudentsModel = require('./model/student');
app.listen(3000);
app.use(express.json());


app.put('/update-student/:_id', async (req, resp) => {
    try {

        const result = await StudentsModel.updateOne(
            { _id: req.params._id },
            { $set: { name: "summit sharma" } }
        );
        resp.send(result);

    } catch (e) {
        resp.send("getting error".e)
    }
})