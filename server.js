const express = require("express");
const path = require("path");
<<<<<<< HEAD

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App is now listening on PORT ${PORT}`);
=======
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

<<<<<<< HEAD
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
>>>>>>> c30c7790a45f90ddd0af4e42711344ae002cdf84
  });
=======
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/supertriviabros";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
>>>>>>> 4eead25a77af5b14f8985a5647f97ade77fed573
});
