import http from "node:http";

const port = 5000;

http.createServer((req, res) => {
    const url = req.url;

    if (url === "/miraclelab") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Welcome to MiracleLab</h1><p>This is our website</p>`);
    } else if (url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>About us</h1>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 Not found</h1>`);
    }
}).listen(port, () => {
    console.log("Server up in Port:", port);
});