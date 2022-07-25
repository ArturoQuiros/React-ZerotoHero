const { response } = require("express");
const User = require("../models/user");

const createUser = async (req, res = response) => {
  //const { name, email, password } = req.body;
  //new instance of user
  const user = new User(req.body);
  console.log(JSON.stringify(user));

  try {
    //save on mongo
    await user.save();
    //correct response
    res.status(201).json({
      ok: true,
      msg: "registro exitoso",
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
