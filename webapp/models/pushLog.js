/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pushLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pushTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    newsType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pushtitle: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    pushbody: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    pushType: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    platform: {
      type: DataTypes.ENUM('android','ios','all'),
      allowNull: false,
      defaultValue: 'all'
    }
  }, {
    tableName: 'pushLog',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
