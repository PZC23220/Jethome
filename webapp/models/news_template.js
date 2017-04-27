/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_template', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    site: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    skeleton: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    platform: {
      type: DataTypes.ENUM('ios','android'),
      allowNull: false,
      defaultValue: 'android'
    }
  }, {
    tableName: 'news_template',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
