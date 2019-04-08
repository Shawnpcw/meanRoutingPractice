
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Product',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,        
    },
    price: {
        type:Number,
        min: 0.01,
    },
    url: {
        type:String,
        minlength:7,
    }
},{timestamps:true})


module.exports = mongoose.model('Product', ProductSchema);