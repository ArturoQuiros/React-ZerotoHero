const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    //new instance of user
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "email already in use",
      });
    }

    //create the new user
    user = new User(req.body);

    //Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    //save on mongo
    await user.save();
    //correct response
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    //error
    res.status(500).json({
      ok: false,
      msg: "Error, contact sys admin",
    });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  //correct response
  res.status(200).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
