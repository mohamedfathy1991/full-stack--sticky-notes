
import { Sequelize } from "sequelize";

 
 
const sequelize = new Sequelize('notes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
  });

   
  sequelize.authenticate().then(()=>{
    console.log('connected to database')
  }).catch(err=>{
    console.log('error connecting to database' +err )
  }) 
    
 export default sequelize   
