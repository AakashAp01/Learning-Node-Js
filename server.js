const http = require('http');

http.createServer((req,resp)=>{
   resp.write("<h1>Server is running on port 3000<h1>");
    resp.end();
}).listen(33000)