const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const web = fs.readFileSync('./web.html')
const index = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const Services = fs.readFileSync('./Services.html')
const contact = fs.readFileSync('./contact.html')


const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(web);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else if (url == '/index') {
        res.end(index);
    }
    else if (url == '/services') {
        res.end(Services);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




