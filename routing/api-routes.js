const User = require("../models/User");
const Score = require("../models/Score");
const Question = require("../models/Question");

module.exports = function (app) {
  app.post("/api/session", function (req, res) {
    User.findOne(req.body)
      .then(function (data) {
        if (data._id) {
          res.json(data);
        }
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  //might not be needed
  app.get("/api/user/:id", function (req, res) {
    User.find({ _id: req.params.id })
      // .populate("scores")
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post("/api/user", function (req, res) {
    User.create(req.body)
      .then(function (dbUser) {
        res.json(dbUser)
      })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });

  app.get("/api/question", function (req, res) {
    Question.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get("/api/user", function (req, res) {
    User.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // needs to be a put on user scores
  app.post("/api/score", function (req, res) {
    const userId = req.body.userId;
    const newEntry = {
      category: req.body.category,
      score: req.body.score
    };

    Score.create(newEntry)
      .then(function (scoreData) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $push: { scores: scoreData._id } },
          { new: true }
        );
      })
      .then(function (userData) {
        res.json(userData);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get("/api/question", function (req, res) {
    Question.find(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.put("/api/user", function (req, res) {
    User.create(req.body)
      .then(function (dbUser) {
        res.json(dbUser)
      })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });

  app.put('/api/user/:id', function (req, res) {
    User.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (data) {
        res.json({ success: true, data: data });
      }).catch(function (err) {
        res.json({ success: false, error: err });
      });
  });

  //replaced by User.put route
  // app.post("/api/user/:id", function (req, res) {
  //   const userId = req.body.userId;
  //   const newEntry = {
  //     body: req.body.body
  //   };

  //   Score.create(newEntry)
  //     .then(function (scoreData) {
  //       return User.findOneAndUpdate(
  //         { _id: userId },
  //         { $push: { scores: scoreData._id } },
  //         { new: true }
  //       );
  //     })
  //     .then(function (userData) {
  //       res.json(userData);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });
};

