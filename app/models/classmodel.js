module.exports = (sequelize, Sequelize) => {
  const classes = sequelize.define(
    'Class',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return classes;
};

