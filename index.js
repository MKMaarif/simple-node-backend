const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Request handler
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Ini adalah halaman utama dengan content type plain text");
    }

    // content with json format
    else if (req.url === '/contacts') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        let contacts = JSON.stringify([
            { name: 'John', phone: '555-1234' },
            { name: 'Mary', phone: '555-5678' },
            { name: 'Lisa', phone: '555-9012' }
        ]);
        
        res.end(contacts);
    }

    // content with html format
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Ini adalah halaman utama dengan content type HTML</h1>');
    }

    // content with html file
    else if (req.url === '/products') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 not found</h1>');
    }

});

server.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});