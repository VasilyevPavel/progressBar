'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  CheckList.init(
    {
      employName: DataTypes.STRING,
      mentorName: DataTypes.STRING,
      progress: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      sid: DataTypes.STRING,
      q1: DataTypes.BOOLEAN,
      q2: DataTypes.BOOLEAN,
      q3: DataTypes.BOOLEAN,
      q4: DataTypes.BOOLEAN,
      q5: DataTypes.BOOLEAN,
      q6: DataTypes.BOOLEAN,
      q7: DataTypes.BOOLEAN,
      q8: DataTypes.BOOLEAN,
      questionInputValue: DataTypes.STRING,
      q9: DataTypes.BOOLEAN,
      q10: DataTypes.BOOLEAN,
      q11: DataTypes.BOOLEAN,
      q12: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'CheckList',
    },
  );
  return CheckList;
};
