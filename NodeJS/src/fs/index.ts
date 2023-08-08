import fs from 'fs';
import http from 'http';
import path from 'path';

const port = 3000;

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

    let filePath = path.resolve(__dirname, '..', '..', 'src', 'fs', 'vistas');

    if(req.url === '/' || req.url === '/home'){
        filePath = path.resolve(filePath, 'index.html');
    } else if (req.url === '/about'){
        filePath = path.resolve(filePath, 'about.html');
    } else if(req.url === '/contact'){
        filePath = path.resolve(filePath, 'contact.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Not Found</h1>");
        return;
    }
    
    fs.readFile(filePath, (error, data) => {
        if(error){
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end("<h1>500 Internal server erorr</h1>");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    })

}).listen(port, () => {
    console.log("Server up in Port: ", port);
})