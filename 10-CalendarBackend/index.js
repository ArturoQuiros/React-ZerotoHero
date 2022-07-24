const express = require("express");
require("dotenv").config();
//express server
const app = express();

//rutas
/*
app.get("/", (req, res) => {
  console.log("hola mundo");
  res.json({
    ok: true,
  });
});
*/

//public
app.use(express.static("public"));

//listen
app.listen(process.env.PORT, () => {
  console.log("This is my server running");
});
