const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function signup(req, res) {
  const { name, phone, password, role, location, isActive } = req.body;

  const isuserAlredyexist = await userModel.findOne({ phone });

  if (isuserAlredyexist) {
    return res.status(409).json({
      message: "user alredy exist",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    phone,
    password: hash,
    role,
    location,
    isActive,
  });

  const token = jwt.sign({userID:user._id} , process.env.JWT_SECRET , {expiresIn:"7d"} )
  
  res.cookie("token"  , token)


  res.status(200).json({
    message:"User created successfully",
    user

  })
}



module.exports = {signup}
