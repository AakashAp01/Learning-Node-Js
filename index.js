// const colors= require('colors');
// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
// console.log("Hello World".bgBlack);
// console.log("Hello World".bgRed);
// const app = require('./app.js'); // user defined module
// const fs = require('fs'); // file system module // core module
// console.log(app.z());
// if(x==5){
//     console.log("x is 5");
// }

// for (let index = 0; index <= 10; index++) {
//     console.log("index is ",index);
    
// }

// array methods ///////////////////////////////////////////////
// const arr = [1,2,3,,3,4,5,6,7,8,9,10];
// arr.forEach(element => {
//     console.log("index of arr is ",element);
// });

// arr.map((element)=>{
//     console.log("element is ",element);
// });
// fs.writeFileSync('test.txt',"Hello World");
// let r = arr.filter((x)=>{
//    return x>5;
// });
// console.log(r);

//simple API//////////////////////////////////////////////////
// const http = require('http');
// const data = require('./data');
// http.createServer((req, resp) => {
//   resp.writeHead(200, { 'Content-Type': 'application/json' });
//   resp.write(JSON.stringify(data));
//   resp.end();
// }).listen(3000);

const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');

for (let index = 0; index < 5; index++) {
  
  fs.writeFileSync(path.join(dirpath,`file${index}.txt`),`Hello World ${index}`);
  
}

fs.readdir(dirpath,(err,files)=>{
  console.log(files);
})



