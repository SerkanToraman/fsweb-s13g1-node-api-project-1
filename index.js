
const http = require('http');

const hostname = '127.0.0.1'
const port = 3000;

const server =http.createServer((req,res)=>{
    res.statusCode = "200";
    res.setHeader('Content-Type','text/plain');
    res.end('hello world from http server')
})

server.listen(port,hostname, ()=>{
  console.log(`Server running on port ${port}...`)
})




// const server = require('./api/server');

// const port = 9000;

// START YOUR SERVER HERE


