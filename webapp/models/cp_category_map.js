/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cp_category_map', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cp_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    cp_category: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    nj_cid: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    tableName: 'cp_category_map',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
