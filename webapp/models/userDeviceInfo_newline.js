/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userDeviceInfo_newline', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(20),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    did: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    deviceType: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    updateTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'userDeviceInfo_newline',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
