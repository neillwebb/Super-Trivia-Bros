const db = require("../models");
const questions = [
  {
    category: "Entertainment: Books",
    difficulty: "medium",
    question: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    incorrect_answers: ["Graham Greene", "H G Wells", "Arthur C Clarke"]
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.Question.bulkCreate(questions)
    .then(function(rows) {
      console.log("Data successfully added!");
    })
    .catch(function(error) {
      console.log("Error", error);
    });
});
