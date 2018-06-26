var express = require('express');
var user = require('../models/user')

var router = express.Router();
router.post('/create',(req,res)=>{
    user.create(req.body,(err,data)=>{
        if(err)console.log(err)
        res.json({success:true,data})
    })
})
router.get('/find',(req,res)=>{
    user.find((err,data)=>{
        res.json(data)
    })
})
router.get('/remove/:id',(req,res)=>{
    user.findByIdAndRemove(req.params.id,(err,data)=>{
        res.json(data)
    })
})
module.exports =router