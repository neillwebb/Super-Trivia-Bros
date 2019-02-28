module.exports = function(connection, Sequelize) {
  const User = connection.define("User", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "That username is taken!"
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    easterEgg: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return User;
};
