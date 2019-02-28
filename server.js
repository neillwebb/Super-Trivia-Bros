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

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
>>>>>>> c30c7790a45f90ddd0af4e42711344ae002cdf84
  });
});
