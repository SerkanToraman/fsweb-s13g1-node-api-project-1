

const server = require('./api/server');

const hostname = '127.0.0.1';
const port = 9000;

//START YOUR SERVER HERE

server.listen(port,hostname, ()=>{
  console.log(`Server running on port ${port}...`)
})


