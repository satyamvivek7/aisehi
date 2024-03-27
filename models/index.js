let { Sequelize, DataTypes } = require('sequelize');
let dotenv =require( 'dotenv' ); 
dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DBUSERNAME,
    process.env.DBPASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        // logging: false

    }
);



// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
sequelize.authenticate()
    .then(() => {
        console.log('db connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./user.js')(sequelize, DataTypes)
// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })
    
module.exports = db