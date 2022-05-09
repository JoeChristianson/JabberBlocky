const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection.js");

class Post extends Model {

}

Post.init(
    {
        id:{
          type:DataTypes.INTEGER,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
        },
        user_id:{
          type:DataTypes.INTEGER,
          allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        text:{
          type:DataTypes.TEXT,
          allowNull:false,
        },
      },
      {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
      }
)

module.exports = Post;