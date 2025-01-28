const mongoose = require('mongoose');
const StudentsSchema = mongoose.Schema({
    name: String,
    class: String,
    surename: String
}, { versionKey: false });

module.exports = mongoose.model('students',StudentsSchema);
