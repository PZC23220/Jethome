/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_lottery_user', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    did: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    lotteryid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    targettype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    targetid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      defaultValue: ''
    },
    award: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    correctnum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wrongnum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mac: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    imei: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'baseball_lottery_user',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
