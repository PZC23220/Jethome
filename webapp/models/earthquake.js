/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('earthquake', {
    id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    outbreak_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    outbreak_area: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    intensity: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    tableName: 'earthquake',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
