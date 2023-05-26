module.exports = (sequelize, Sequelize) => {
    const Staff = sequelize.define(
      'Staff',
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
        designation: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        qualification: {
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
    return Staff;
  };
  