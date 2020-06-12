const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

const port = 8000;

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
//we use body parser because node can't process url encoded forms on its own
app.use(bodyParser.urlencoded({ extended:true }));

require('./app/routes')(app, {});

app.listen(port, () =>{
  console.log('live on ' + port)
});
