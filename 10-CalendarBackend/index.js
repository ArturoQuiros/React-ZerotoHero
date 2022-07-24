const express = require("express");
require("dotenv").config();
//express server
const app = express();

//public
app.use(express.static("public"));

//rutas
app.use("/api/auth", require("./routes/auth"));

//listen
app.listen(process.env.PORT, () => {
  console.log("This is my server running");
});
