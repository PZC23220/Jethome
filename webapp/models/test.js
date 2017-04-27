/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    test: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'test',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
