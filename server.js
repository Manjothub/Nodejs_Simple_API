const http = require('http');
const data = require('./app');
http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content- Type':'application\json'});
    resp.write(JSON.stringify());
}).listen(4500);