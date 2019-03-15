const User = require("../models/User");
const Score = require("../models/Score");
const Question = require("../models/Question");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

}



module.exports = function (app) {
  //works
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

  //works
  app.get("/api/user/:id", function (req, res) {
    User.findOne({ _id: req.params.id })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //works
  app.post("/api/user", function (req, res) {
    User.create(req.body)
      .then(function (dbUser) {
        res.json(dbUser)
      })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });

  //works
  app.get("/api/question/:id", function (req, res) {
    Question.find({
      category: req.params.id
    })
      .then(function (data) {
        shuffle(data);
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

  app.get("/api/question", function (req, res) {
    Question.find(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //works
  app.put('/api/user', function (req, res) {
    const userId = req.body.username;
    const category = req.body.category;
    const score = req.body.score;
    console.log(userId, category, score)
    User.findOneAndUpdate({ username: userId },
      { $set: { "scores.$[elem].score": score } },
      {
        multi: true,
        arrayFilters: [{ "elem.category": category }]
      })
      .then(function (data) {
        res.json({ success: true, data: data });
      }).catch(function (err) {
        res.json({ success: false, error: err });
      });
  });

};

