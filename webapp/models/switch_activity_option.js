/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('switch_activity_option', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'switch_activity_option',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
