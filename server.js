const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    const filePath = path.join(__dirname, 'src/text.html');
    fs.readFile(filePath, (err,content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain'});
            res.end('Server Error');

        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(content);
        }
    });
});

server.listen(8080, () => {
    console.log('실행 중 입니다!');
});