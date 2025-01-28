const mongoose = require('mongoose');
const StudentsSchema = mongoose.Schema({
    name: String,
    class: Number,
    surename: String
}, { versionKey: false });

module.exports = mongoose.model('students',StudentsSchema);
