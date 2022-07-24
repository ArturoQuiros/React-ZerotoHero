const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "registro",
  });
};

const loginUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
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
