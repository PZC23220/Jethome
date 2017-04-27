/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_notification_log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    result: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '-1'
    },
    device: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pushtime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    pushtype: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    pushId: {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '-1'
    },
    pushnums: {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '-1'
    },
    suc_nums: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '-1'
    },
    fail_nums: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '-1'
    },
    resultmsg: {
      type: DataTypes.STRING(4096),
      allowNull: true
    }
  }, {
    tableName: 'push_notification_log',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
