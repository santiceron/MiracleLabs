import http from "node:http";

const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("This is my server");
}).listen(port, () => {
    console.log("Server up in Port", port);
});