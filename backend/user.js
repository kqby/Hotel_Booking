const express = require("express")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("./models/user")

const router = express.Router();

router.post("/signup",(req,res,next) => {
  bcrypt.hash(req.body.password,10,).then(hash => {
    const user = new User({
      email: req.body.email,
      password:hash,
    })
    user.save()
      .then(result => {
        res.status(201).json({
          message:'User created',
          result:result
        })
      })
      .catch(err =>{
        res.status(500).json({
          error:err
        })
      })
  })


})
//LOGIN
router.post("/login",(req,res,next)=>{
     let fetchedUser
    //létezik-e az email , megnézük ,hogy létezik -e ilyen email ha igen(then) akkor ,ha nem akkor pedig hibát dobunk vissza
    User.findOne({email:req.body.email})
      .then(user => {
            if(!user){
              return res.status(401).json({
                message:'Auth failed'
              })
            }
        fetchedUser = user
            //ha megvan az email address,a beírt jelszót haseljük és össze hasonlitsuk ,hogy meg egyeznek-e ( ez promise-sal tér vissza)
     return   bcrypt.compare(req.body.password,user.password);
      }).then(result => {
        if(!result) {//ha nincs meg
          return res.status(401).json({
            message: 'Auth failed'
          })
        }
        //JSON WEB TOKEN generálás  payload mik alapján, secretkey radom szöveg, expires meddig legyen érvényes
      const token = jwt.sign(
        {email: fetchedUser.email,userId: fetchedUser._id}
        ,'secret_This_should_be_longer_MORE'
        ,{expiresIn:"1h"}
      )
      res.status(200).json({
        token:token
      })
    })

      //hiba
      .catch(err =>{
        console.log(err)
        return res.status(401).json({
          message:'Auth failed'
        })
      })

})

module.exports = router;
