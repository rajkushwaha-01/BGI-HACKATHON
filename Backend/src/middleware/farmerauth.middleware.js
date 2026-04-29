const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function userIdentifier(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unathorized",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "unathorized",
    });
  }

  const user = await userModel.findById(decoded.userID);
  if(!user){
    return res.status(401).json({
        message :"Unathorized"
    })
  }
  console.log(user);
  if(user.role != 'farmer'){
    return res.status(401).json({
        message :"Unathorized"
    })
  }
  req.user = user;

  next();
}

module.exports = userIdentifier;
