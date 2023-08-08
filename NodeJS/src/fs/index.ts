import fs from 'fs';
import http from 'http';
import path from 'path';

const port = 3000;

//Item 1 and 2
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

//Item 4

http.createServer((req, res) => {

    if(req.url !== '/about'){
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Not found</h1>");
        return;
    }

    const filePath = path.resolve(__dirname, '..', '..', 'src', 'fs', 'vistas', 'about.html');
    console.log(filePath);

    fs.readFile(filePath, (error, data) => {
        if(error){
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end("<h1>500 Internal server erorr</h1>");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    })

}).listen(port, () => {
    console.log("Server up in Port: ", port);
})