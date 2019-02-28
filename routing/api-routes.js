const User = require("../models/user");
const Score = require("../models/score");
const Question = require("../models/question");

module.exports = function(app) {
  app.post("/api/session", function(req, res) {
    User.find(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  app.get("/api/user/:id", function(req, res) {
    User.find({ _id: req.params.id })
      .populate("scores")
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  app.post("/api/user", function(req, res) {
    User.create(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
