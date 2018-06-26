var express    = require('express')
var path       = require('path')
var fs         = require('fs')
var mongoose   = require('mongoose')
var bodyParser =require('body-parser');

var users = require('./routes/users')

var app =express();

mongoose.connect('mongodb://localhost/citiedge')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// app.use(require('cookie-parser')());


app.use(express.static(path.resolve(__dirname,  '../dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
});
app.use('/users',users)
app.listen(100,()=> console.log("successs"))   