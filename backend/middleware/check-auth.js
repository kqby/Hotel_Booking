const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
  try {

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret_This_should_be_longer_MORE");
    next()
  } catch (error){
    res.status(401).json({
      message:'Auth failed'
    })
  }


}
