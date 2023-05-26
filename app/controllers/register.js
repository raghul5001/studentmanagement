const db = require("../models");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ where: { email: email } });

    if (userExist) {
      return res.status(200).json({ message: "User details already exist" });
    } else {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPass,
      });

      res
        .status(200)
        .json({ message: "User registered successfully", data: user });
    }
  } catch (error) {
    res.status(400).json({ errorMessage: error.message || error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const result = await bcrypt.compare(password, user.password);

      if (result) {
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          "yourSecretKey",
          { expiresIn: "10min" }
        );

        res
          .status(200)
          .json({ message: "Logged-in successfully", token: token });
      } else {
        res.status(401).json({ errorMessage: "Incorrect password!" });
      }
    } else {
      res.status(404).json({ errorMessage: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ errorMessage: error.message || error });
  }
};

module.exports = { register, login };