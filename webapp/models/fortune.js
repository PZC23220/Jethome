/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fortune', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fortune: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    key: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'fortune',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
