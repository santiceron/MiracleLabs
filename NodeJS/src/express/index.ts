import express from 'express';

const app = express();

const port = 4444;

app.get("/", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end("<h1>Hi!</h1>");
})

app.get("/yo", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Hi again</h1>");
})

app.listen(port, () => {
    console.log("Server up in Port: ", port);
})