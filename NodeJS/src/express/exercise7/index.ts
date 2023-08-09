import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 4444;

interface Product {
    name: string;
    price: number;
    id?: number;
}

const shoppingList: Product[] = [
    { name: "milk", price: 250, id: 0 },
    { name: "bread", price: 100, id: 1 },
    { name: "soap", price: 150, id: 2 },
];

let nextId = 3;

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Welcome to our shopping list website</h1>");
})

app.get('/items', (req, res) => {
    res.json(shoppingList);
})

app.get('/items/:id', (req, res) => {

    const itemId = Number(req.params.id);
    const item = shoppingList.find(item => item.id === itemId);

    if(!item){
        res.status(404);
        res.json({ error: "Item not found" });
    } else {
        res.json(item);
    }

})

app.post('/items', (req, res) => {
    const newItem: Product = req.body;

    if (!newItem.name || !newItem.price) {
        res.status(422);
        res.json({ error: "Name and price are required" });
        return;
    } else {
        newItem.id = nextId++;
        shoppingList.push(newItem);
        res.status(201);
        res.json(shoppingList);
    }
})

app.listen(port, () => {
    console.log("Server up in port: ", port);
})

