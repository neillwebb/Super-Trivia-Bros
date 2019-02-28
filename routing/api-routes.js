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
  app.get("/api/question", function(req, res) {
    Question.find(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  app.post("/api/user/:id", function(req, res) {
    const userId = req.body.userId;
    const newEntry = {
      body: req.body.body
    };

    Score.create(newEntry)
      .then(function(scoreData) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $push: { scores: scoreData._id } },
          { new: true }
        );
      })
      .then(function(userData) {
        res.json(userData);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
