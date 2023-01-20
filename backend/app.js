//express app
const express = require('express');
const app  = express();
const Hotel = require('./models/hotel')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const checkAuth =require("./middleware/check-auth")
const userRoutes = require("./user")


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



app.post('/api/hotels',(req ,res,next) => {
  const hotel  = new Hotel({
    id: req.body.id,
    name: req.body.name,
    address:req.body.address,
    picture:req.body.picture,
    description:req.body.description,
    pricing:req.body.pricing,
    accommodation:req.body.accommodation,
    properties:req.body.properties

  });

  console.log("siker")
  console.log(hotel)
  res.status(201).json({
    message:'Hotel addded ',
    hotels:hotel
  });
})



app.get('/api/hotels', (req,res,next) => {

  Hotel.find()
    .then(document => {
      res.status(200).json({
        message:'nem hiszem ,hoy jó',
        hotels:document
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



app.use("/api/user",userRoutes)

module.exports = app;


