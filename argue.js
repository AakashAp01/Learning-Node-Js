const fs = require('fs');

const input = process.argv[2];
fs.writeFileSync(input[0],"Hello World");