import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './index.js';

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }   
}, {
    // Other model options go here
  tableName:'userdetail',
  schema:'Details'
});


// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

export default User;