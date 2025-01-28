const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());
require('./config');
const StudentsModel = require('./model/student');

app.get('/search/:field', async (req, resp) => {
    try {
        const result = await StudentsModel.find({
            $or: [
                { name: { $regex: req.params.field } },
                { class: { $regex: req.params.field } },
                { surename: { $regex: req.params.field } },
            ]
        })

        if (result.length === 0) {
            return resp.status(404).send({ message: 'No matching records found' });
        }
        resp.send(result);
    } catch (e) {
        resp.status(500).send({ message: 'An error occurred', error: e.message });
    }

});

