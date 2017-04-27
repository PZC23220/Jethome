/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    jpn_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    eng_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    tableName: 'countries',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
