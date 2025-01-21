const fs = require('fs');

const input = process.argv;

if(input[2] == "add"){

    fs.writeFileSync(input[3],input[4]);

}else if(input[2] == "delete"){

    fs.unlinkSync(input[3]);

}else{

    console.log("Invalid Command");

}
