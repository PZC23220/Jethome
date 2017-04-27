/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('followers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    follow: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    createdtime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'followers',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
