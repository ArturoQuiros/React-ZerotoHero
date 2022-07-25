//  Auth Routes on  /api/auth

const { Router, application } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");

router.post(
  "/new",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email format invalid").isEmail(),
    check("password", "password length must be +5").isLength({ min: 5 }),
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "email format invalid").isEmail(),
    check("password", "password length must be +5").isLength({ min: 5 }),
  ],
  loginUser
);

router.get("/renew", revalidateToken);

module.exports = router;
