var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    isKitchen:Boolean,
    isWordrobe:Boolean,
    isFullInterior:Boolean,
    kitchenShape:String,
    kitchenWallA:Number,
    kitchenWallB:Number,
    kitchenWallC:Number,
    totalKitchenlength:Number,
    wordrobesType:String,
    entertainment:Boolean,
    study:Boolean,
    crockery:Boolean,
    name:String,
    phone:String ,
    email:String ,
    address:String
})
module.exports = mongoose.model('user',schema) 