const jwt = require("jsonwebtoken");
// import model user
const User = require("../model/user");
const config = process.env;

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.params.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    // get user by id from database and save it to const user variable
    const user = await User.findById(req.user.user_id);
    req.user = {
      ...req.user,
      'first_name': user.first_name,
      'last_name': user.last_name,
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
