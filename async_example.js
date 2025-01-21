console.log('started');

a = 10;
b = 20;

setTimeout(()=>{
    // a = 30
    console.log('waiting');
},1000);

let data = new Promise((resolve,reject)=>{
    resolve(30)
})

data.then((data)=>{
    a += data;
    console.log('fnished',a+b);
})




