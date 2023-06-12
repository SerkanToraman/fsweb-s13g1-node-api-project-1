// SUNUCUYU BU DOSYAYA KURUN

const http = require('http');


const server =http.createServer((req,res)=>{
    res.statusCode = "200";
    res.setHeader('Content-Type','text/plain');
    res.end('hello world from http server')
})




module.exports = server; // SERVERINIZI EXPORT EDİN {}
