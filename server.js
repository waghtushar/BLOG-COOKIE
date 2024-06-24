const express = require("express");
const path = require("path");
const route = require("./router/router.js");
const { urlencoded } = require("express");
const database = require("./config/databse.js");
const cookie = require("cookie-parser");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(cookie());
app.use(route);

app.listen(5000, (err) => {
    database();
  if (err) {
    console.log(err);
  } else {
    console.log("Server Connected http://localhost:5000");
  }
});
