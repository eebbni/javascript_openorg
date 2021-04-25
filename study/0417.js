const http = require('http');
const url = require('url');

const server1 = http.createServer((req,res) => {
   const parsed = url.parse(req.url,true);
   console.log('parsed : '+parsed);
});

server1.listen(3000);
