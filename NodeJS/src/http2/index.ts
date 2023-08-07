import http from 'node:http';

const port = 3000;

http.createServer((req, res) => {
    const url = req.url;

    if(req.method === "GET"){
        if (url === "/" || url === "/home") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Home</h1>");
        } else if (url === "/about") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>About us</h1>");
        } else if (url === "/where") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Where we are</h1>");
        } else if (url === "/what") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>What we do</h1>");
        } else if (url === "/contact") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Contact us</h1>");
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 Not Found</h1>");
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end("<h1>Method not allowed</h1>");
    }    

}).listen(port, () => {
    console.log("Server up in Port:", port);
})