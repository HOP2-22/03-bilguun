const jwt = require("jsonwebtoken");

exports.authenticate = async (req, res, next) => {
  const token = req.body.token;

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, payload) => {
    if (error) {
      return res.status(500).json({ message: "Unauthorized" });
    }
    next();
  });
};
