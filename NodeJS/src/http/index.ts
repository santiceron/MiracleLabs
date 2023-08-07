import http from "node:http";

const port = 5000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("This is my server");

    console.log("Request's URL:", req.url);    
}).listen(port, () => {
    console.log("Server up in Port:", port);
});