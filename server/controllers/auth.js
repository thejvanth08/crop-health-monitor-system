const jwt = require("jsonwebtoken");

const signup = (req, res) => {
  console.log(req.body);
  return;
};

const login = (req, res) => {
  console.log(req.body);
  return;
};

module.exports = {
  signup,
  login,
};
