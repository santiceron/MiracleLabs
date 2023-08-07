import http from "node:http";

const port = 5000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const url = req.url?.slice(1);    
    res.end(`<h1>Current URL: ${url}</h1>`); 
}).listen(port, () => {
    console.log("Server up in Port:", port);
});