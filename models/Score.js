module.exports = function(connection, Sequelize) {
  const Score = connection.define("Score", {
    username: {
      type: Sequelize.STRING
    },
    Books: {
      type: Sequelize.INTEGER
    },
    Movies: {
      type: Sequelize.INTEGER
    },
    Sports: {
      type: Sequelize.INTEGER
    },
    Television: {
      type: Sequelize.INTEGER
    },
    Celebrities: {
      type: Sequelize.INTEGER
    },
    Animals: {
      type: Sequelize.INTEGER
    },
    VideoGames: {
      type: Sequelize.INTEGER
    },
    Music: {
      type: Sequelize.INTEGER
    },
    ScienceAndNature: {
      type: Sequelize.INTEGER
    },
    GeneralKnowledge: {
      type: Sequelize.INTEGER
    }
  });

  return Score;
};
