const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const result = await User.create({ email: email, password: newPassword });
    console.log(result);
    res.status(201).json({ data: "success" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ data: "failed" });
  }
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
