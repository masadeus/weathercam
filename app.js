var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var port = process.env.PORT || 4000;

app.use('/src/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// connect to DB
mongoose.connect(config.getDbConnectionString());

app.listen(port);
