var express = require('express');
var user = require('../models/user')

var router = express.Router();
router.post('/create',(req,res)=>{
    user.create(req.body,(err,data)=>{
        if(err)console.log(err)
        res.json({success:true,data})
    })
})
router.get('/findByid/:id',(req,res)=>{
    user.findById(req.params.id,(err,user)=>{
        if(err)console.log(err)
        res.json({success:true,user}) 
    })
})
router.post('/update/:id',(req,res)=>{
    user.findByIdAndUpdate(req.params.id,req.body,(err,user)=>{
        res.json({success:true,user})
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