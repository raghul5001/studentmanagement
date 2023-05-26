module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "user",
      {
        userName: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
          },
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      { timestamps: true }
    );
    return User;
  };