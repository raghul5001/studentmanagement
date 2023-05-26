const dbconfig = require("../config/db.config");
const Sequelize =  require('sequelize');
const sequelize= new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
        acquire:dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
});
const db ={};
db.Sequelize =Sequelize;
db.sequelize=sequelize;
db.user=require("./usermodel")(sequelize,Sequelize);
db.Student=require("./studentmodel")(sequelize,Sequelize);
db.Staff=require("./staffmodel")(sequelize,Sequelize);
db.classes=require("./classmodel")(sequelize,Sequelize);
db.section=require("./sectionmodel")(sequelize,Sequelize);
module.exports=db;