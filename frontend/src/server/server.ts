import * as express from 'express';

const hostname = 'localhost';
const port = 3000;
const server = express();

server.get('/api/', (res, req) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
