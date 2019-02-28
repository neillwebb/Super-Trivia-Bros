const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/supertriviabros";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
