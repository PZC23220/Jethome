/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weather', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    area: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    _date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updatedtime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    forecast: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    extra: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'weather',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
