//express app
const express = require('express');
const app  = express();
const Hotel = require('./models/hotel')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const Reservation = require("./models/reservation")
const checkAuth =require("./middleware/check-auth")
const userRoutes = require("./user")
const router = express.Router();

//0JFCxqoAXu8HnEdQ
mongoose
  .connect('mongodb+srv://testmongodb:0JFCxqoAXu8HnEdQ@cluster0.qc2aosx.mongodb.net/HotelBooking?retryWrites=true&w=majority')
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


//CROS miatt
app.use((req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS,");
  next();
});




app.get('/api/hotels', (req,res,next) => {

  Hotel.find()
    .then(document => {
      res.status(200).json({
        message:'nem hiszem ,hoy jó',
        hotels:document
      })
    });


})
app.get('/api/reservation-list',checkAuth ,(req,res,next) => {

  Reservation.find({creator:req.userData.userId})
    .then(document => {
      res.status(200).json({
        message:'foglalási időpontok',
        reservations:document
      })
    });


})

app.get('/api/hotels/:id', (req,res,next) => {

  Hotel.findById(req.params.id)
    .then(document => {
      res.status(200).json({
        message:'nem hiszem ,hoy jó',
        hotels:document
      })
    });

})
app.get('/api/reservation-list/:id', (req,res,next) => {

  Reservation.findById(req.params.id)
    .then(document => {
      res.status(200).json({
        message:'nem hiszem ,hoy jó',
        reservation:document
      })
    });

})

app.post('/api/reservation',checkAuth,(req,res,next ) =>{
  const booking = new Reservation({
    id: req.body.id,
    startDate:req.body.startDate,
    endDate:req.body.endDate,
    email:req.body.email,
    creator:req.userData.userId
  });
  booking.save().then( result =>{
    res.status(201).json({
      message:'Reservation  added succcesfully',
      reservationId:result.id
    });
  });
  })

app.delete('/:id',checkAuth,(req,res,next) => {

  Reservation.deleteOne({id:req.params._id,creator:req.userData.userId}).then(result =>{
  console.log(result)
    res.status(200).json({message:'Reservation Deleted'})
  })

})



app.use("/api/user",userRoutes)

module.exports = app;


