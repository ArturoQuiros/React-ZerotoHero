const express = require("express");
require("dotenv").config();
//express server
const app = express();

//public
app.use(express.static("public"));

//Ruta, lectura y parseo de Auth
app.use(express.json("./routes/auth"));
app.use("/api/auth", require("./routes/auth"));

//listen
app.listen(process.env.PORT, () => {
  console.log("This is my server running");
});
