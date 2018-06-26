var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    isKitchen:Boolean,
    isWordrobe:Boolean,
    isFullInterior:Boolean,
    kitchenShape:String
})
module.exports = mongoose.model('user',schema)