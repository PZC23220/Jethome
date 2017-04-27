/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warning', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    area: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    warn_kind: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    _date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    detail: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'warning',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
