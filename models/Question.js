module.exports = function(connection, Sequelize) {
  const Question = connection.define("Question", {
    category: Sequelize.STRING,
    difficulty: Sequelize.STRING,
    question: Sequelize.TEXT,
    correct_answer: Sequelize.STRING,
    incorrect_answers: Sequelize.TEXT
  });

  return Question;
};
