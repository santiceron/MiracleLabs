import express from 'express';
import path, { dirname } from 'path';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

const port = process.env.PORT || 4444;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
})

app.get('/api/rickandmorty', async (req, res) => {
    try{
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        res.status(response.status);
        res.json(response.data);
    } catch(error){
        res.status(500).json({error: "Error fetching data"});
    }
})

app.listen(port, () => {
    console.log("Server up in Port: ", port);
})

