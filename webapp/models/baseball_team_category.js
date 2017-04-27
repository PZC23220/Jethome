/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_team_category', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    teamid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name_full: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    name_short: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    name_supershort: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    name_en: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'baseball_team_category',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
