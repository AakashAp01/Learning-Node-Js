const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/school';
const connect = async ()=>{

    await mongoose.connect(URL).then(() => console.log('Connected!'));
};
connect();

const addStudent = async ()=>{

    const StudentsSchema = new mongoose.Schema({
        name:String,
        class:Number
    }, { versionKey: false }); 
    const StudentsModel = mongoose.model('students',StudentsSchema);  

    let data = new StudentsModel({
        name:'skyking',
        class:12
    });

    let result = await data.save();

    console.log(result);
}


// addStudent();

const updateStudent =async ()=>{

    const StudentsSchema = mongoose.Schema({
        name:String,
        class:Number,
        surename:String
    },{versionKey:false});

    const StudentsModel = mongoose.model('student',StudentsSchema);

    const data = await StudentsModel.updateOne({name:'aakashPrajapati'},{$set:{name:'aakash',surename:'prajapati'}})
    console.log(data);
}

// updateStudent();


