//  Auth Routes on  /api/auth

const { Router, application } = require("express");
const router = Router();

const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");

router.post("/new", createUser);

router.post("/", loginUser);

router.get("/renew", revalidateToken);

module.exports = router;
