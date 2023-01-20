const mongoose = require('mongoose')

//adatstrúktura  - blueprint
const hotelSchema = mongoose.Schema({

  id:{type:String,require:true},
  name:{type:String,require:true},
  address:{type:String,require:true},
  picture:{type:String,require:true},
  pricing:{type:Number,require:true},
  description:{type:String,require:true},
  accommodation:{type:Number,require:true},
  Properties:{type:Array},


})


//exportálás - model
module.exports = mongoose.model('Hotel',hotelSchema,'hotels')
