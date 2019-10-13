// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { port, mongoDB } = require('./config');
const product = require('./routes/product.route');

const app = express();

console.log(port);

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});