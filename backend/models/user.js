const mongoose = require('mongoose')

const uniqueValidator = require("mongoose-unique-validator")

//adatstrúktura  - blueprint
const userSchema = mongoose.Schema({
  email:{type:String,require:true,unique:true},
  password:{type:String,require:true},
})

//plugins
userSchema.plugin(uniqueValidator)

//exportálás - model
module.exports = mongoose.model('User',userSchema)
