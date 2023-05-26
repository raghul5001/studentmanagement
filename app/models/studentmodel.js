module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define(
      "student",
{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  parentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  parentPhone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pincode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
      
      { timestamps: true }
    );
    return Student;
  };