import fs from 'fs';
import http from 'http';
import path from 'path';
const serverConfig = require('./../config');

//Items 1 and 2
function showDirectory() {
    console.log("Current directory: ", __dirname);
}

showDirectory();

//Item 3

fs.readFile('./src/fs/files/myFile.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        throw err;
    }
});

//Items 4, 5, 6 and 7

http.createServer((req, res) => {

    const url = req.url;

    if (url !== undefined) {
        const fileName = serverConfig.routes[url] || '404';

        if (fileName === '404') {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 Not Found</h1>");
            return;
        }

        const filePath = path.resolve(__dirname, '..', '..', 'src', 'fs', 'vistas', fileName);

        fs.readFile(filePath, (error, data) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end("<h1>500 Internal server erorr</h1>");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    } else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end("<h1>400 Bad Request</h1>");
    }

}).listen(serverConfig.port, () => {
    console.log("Server up in Port: ", serverConfig.port);
})