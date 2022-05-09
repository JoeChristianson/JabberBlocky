const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      user_name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false,
      }
    },
    
    {
      hooks: {
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );

  module.exports = User;