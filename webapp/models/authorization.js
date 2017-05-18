/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorization', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'authorization'
  });
};
