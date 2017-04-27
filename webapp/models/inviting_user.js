/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inviting_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    did: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    share_code: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    balance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    lottery_result: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    lottery_left: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    allow_12th: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'inviting_user',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
