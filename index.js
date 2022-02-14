const express = require("express");
const port = process.env.PORT || 4001;
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const comments = require('./data/comments');
const products = require('./data/products');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Part One

app.get('/data/contacts', (req, res) => {
    res.send(contacts);
  })

app.get('/data/vehicles', (req, res) => {
    res.send(vehicles);
})

app.get('/data/comments', (req, res) => {
    res.send(comments);
})

app.get('/data/products', (req, res) => {
    res.send(products);
})

app.get('/data/contacts/:id', (req, res) => {
    res.send(contacts.id);
  })

app.get('/data/vehicles/:id', (req, res) => {
    res.send(vehicles.id);
})

app.get('/data/comments/:id', (req, res) => {
    res.send(comments.id);
})

app.get('/data/products/:id', (req, res) => {
    res.send(products.id);
})

app.post('/contacts', (req, res) => {
    
})

app.post('/vehicles', (req, res) => {
    
})

app.post('/comments', (req, res) => {
    
})

app.post('/products', (req, res) => {
    
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
