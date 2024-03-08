import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: 'localhost',
    dialect: 'mysql' 
});



try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


// Exporting sequelize as default
export default sequelize;
