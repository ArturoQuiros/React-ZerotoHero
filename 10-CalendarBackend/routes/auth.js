//  Auth Routes on  /api/auth

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("hola mundo");
  res.json({
    ok: true,
  });
});

module.exports = router;
