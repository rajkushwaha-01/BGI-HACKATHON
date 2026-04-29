const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function userIdentifier(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unothorize",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "unothorize",
    });
  }

  const user = await userModel.findById(decoded.userID);
  console.log(user);
  res.user = user;

  next();
}

module.exports = userIdentifier;
