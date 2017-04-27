/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inform', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('like','comment','follow'),
      allowNull: false,
      defaultValue: 'like'
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'inform',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
