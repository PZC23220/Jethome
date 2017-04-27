/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_pushlog', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pushtype: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    pushcontenttype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pushtargetid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pushcontentid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    pushmsg: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'baseball_pushlog',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
