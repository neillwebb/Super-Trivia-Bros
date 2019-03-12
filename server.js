const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routing/api-routes.js")(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(__dirname + "/client/build/index.html");
  });
}

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/supertriviabros";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
