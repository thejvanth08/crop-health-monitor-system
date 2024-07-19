const authenticate = (req, res, next) => {
  const cookie = req?.cookies;
  console.log("authenticating");
  try {
    next();
  } catch(err) {
    console.log(err);
  }
}

module.exports = authenticate;