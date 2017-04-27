/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_follower', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    followeruid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    followerdid: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    followtype: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    targetid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'baseball_follower',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
