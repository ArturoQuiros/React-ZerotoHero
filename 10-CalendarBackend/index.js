const express = require("express");
//express server
const app = express();

//rutas
app.get("/", (req, res) => {
  console.log("hola mundo");
  res.json({
    ok: true,
  });
});

//listen
app.listen(4000, () => {
  console.log("This is my server running");
});
