const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.getUsers = async (req, res) => {
  const users = await Users.find();
  res.status(200).json({
    message: "success",
    data: users,
  });
};

exports.createUsers = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  console.log(req.body.password);
  const hashed = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await Users.create({
      email: req.body.email,
      password: hashed,
    });
    res.send({ message: "created successfully", user });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const ACCESS_TOKEN_KEY = "secret123";

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        ACCESS_TOKEN_KEY,
        { expiresIn: "1h" }
      );
      res.send({ email: user.email, match: match, token: token });
    } else {
      res.send({ message: match });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
