const http = require('http');
const port = 5500;

const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.write('Hello, world!');
        res.end();
    }
    else if (req.url === '/api/courses') {
        res.write(JSON.stringify({id: 1, name:'Ibrahim', class:'Electrical Engineering'}))
        res.end();
    }
});

server.listen(port,() => console.log('listening on port 5000...'))

