module.exports = function (connection, Sequelize) {
    const Scores = connection.define('Scores', {
        username: {
            type: Sequelize.STRING
        },
        Books: {
            score: 0
        },
        Movies: {
            score: 0
        },
        Sports: {
            score: 0
        },
        Television: {
            score: 0
        },
        Celebrities: {
            score: 0
        },
        Animals: {
            score: 0
        },
        VideoGames: {
            score: 0
        },
        Music: {
            score: 0
        },
        ScienceAndNature: {
            score: 0
        },
        GeneralKnowledge: {
            score: 0
        }
    });


    return Scores;
};
