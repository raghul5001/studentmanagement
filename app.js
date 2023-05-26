const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const routeservice = require("./app/routes")
 app.use(express.json());
 app.use(express .urlencoded({extended:true}));


 const PORT = 5001;
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
 })

 app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
 app.use('/student',routeservice)

const db = require("./app/models/index");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  app.get("/",(req,res)=>{
    res.json(
        {
            message:"running"
        }
    )
  })
  