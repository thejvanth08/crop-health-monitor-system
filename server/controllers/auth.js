const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  console.log("signing up", req.body);
  return;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User({ email: email });
  } catch (err) {
    console.log(err);
  }
  return;
};

module.exports = {
  signup,
  login,
};
