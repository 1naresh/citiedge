var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    isKitchen:Boolean,
    isWordrobe:Boolean,
    isFullInterior:Boolean
})
module.exports = mongoose.model('user',schema)