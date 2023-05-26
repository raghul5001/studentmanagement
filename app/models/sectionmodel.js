module.exports = (sequelize, Sequelize) => {
  const section = sequelize.define(
    'Section',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    },
    { timestamps: true }
  );
  return section;
};
