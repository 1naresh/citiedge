var express        = require('express')
var path           = require('path')
var fs             = require('fs')
var mongoose       = require('mongoose')
var bodyParser     = require('body-parser');
var Razorpay       = require('razorpay');
var cors           = require('cors')

var users          = require('./routes/users');
var blouses        = require('./routes/blouses');
var orders         = require('./routes/orders');
var products       = require('./routes/products');
var visitors       = require('./routes/visitors');
var app            = express(); 


mongoose.connect('mongodb://localhost:27017/blousebay', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.static(path.resolve(__dirname, '../dist'))); 

app.post('/api/v1/rzp_capture/:payment_id/:amount', (req, res) => {
    console.log(req.body)
    const { payment_id } = req.params;
    const amount = Number(req.params.amount * 100);
    instance.payments.capture(payment_id, amount).then((data) => {
        console.log(data)
        res.json(data);
    }).catch((error) => {
        res.json(error);
    });
});

app.get('/api/v1/rzp_refunds/:payment_id', (req, res) => {
    const { payment_id } = req.params;
    instance.payments.refund(payment_id).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    });
});

app.use('/', users) 
app.use('/blouses', blouses)   
app.use('/orders', orders)     
app.use('/products', products)   
app.use('/visitors',visitors)

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html')); 
});
fs.readFile("./app.txt",'utf8',(err,data)=>{
    app.listen(4000, () => console.log("server is running successfully on port 127.0.0.1" + data)); 
})