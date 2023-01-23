const mongoose =require('mongoose')

const reservationSchema = mongoose.Schema({
  //csinálunk a mongodbnek egy ilyen schemat ,amilyen a moodelünk


  id: {type:String,require:true},
  startDate:{type:Date,require: true},
  endDate:{type:Date,require: true},
  creator:{type: mongoose.Schema.Types.ObjectId, ref:"User" , require:true}



});


module.exports =  mongoose.model('Reservation',reservationSchema);
