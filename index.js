
//START YOUR SERVER HERE

// http version
// const server = require('./api/server');

// const hostname = '127.0.0.1';
// const port = 9000;
// server.listen(port,hostname, ()=>{
//   console.log(`Server running on port ${port}...`)
// })

//express version
const server = require('./api/server');
const port = 9000;

console.log("deneme")

server.listen(port, ()=>{
    console.log(`Servers running on port ${port}...`)
})
