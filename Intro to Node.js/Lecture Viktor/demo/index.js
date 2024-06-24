const http = require('http');

const server = http.createServer((request, response) => {
    console.log('request received');
});

server.listen(3000);