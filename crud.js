const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');

const myfile = `${dirpath}/file1.json`;

const data = {
    "name": "file1",
    "content": "Hello World"
}

fs.writeFileSync(myfile,JSON.stringify(data));

fs.readFile(myfile,'utf8',(err,data)=>{
    console.log(JSON.parse(data));
})

fs.rename(myfile,`${dirpath}/akash.json`,(err)=>{
    if(err) throw err;
    console.log('File renamed');
})

// fs.unlink(`${dirpath}/akash.json`,(err)=>{
//     if(err) throw err;
//     console.log('File deleted');
// })