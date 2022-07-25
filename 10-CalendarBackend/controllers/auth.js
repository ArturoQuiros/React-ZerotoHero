const { response } = require("express");

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    res.status(400).json({
      ok: false,
      msg: "name too short",
    });
  }

  res.json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
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
