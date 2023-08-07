import http from "node:http";

const port = 5000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const url = req.url?.slice(1);

    if (url === "miraclelab") {
        res.end(`<h1>Welcome to MiracleLab</h1><p>This is our website</p>`);
    } else if (url === "about") {
        res.end(`<h1>About us</h1>`);
    } else {
        res.end(`<h1>Current URL: ${url}</h1>`);
    }
}).listen(port, () => {
    console.log("Server up in Port:", port);
});