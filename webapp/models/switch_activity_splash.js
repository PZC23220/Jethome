/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('switch_activity_splash', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image2x: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    image3x: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    act_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    shareImage: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    skip: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    skip_duration: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    validity_start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    validity_end: {
      type: DataTypes.TIME,
      allowNull: true
    },
    showtimes: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    platform: {
      type: DataTypes.ENUM('ios','android'),
      allowNull: false,
      defaultValue: 'ios'
    },
    app_platform: {
      type: DataTypes.ENUM('newsjet','funjet','newsline','newsjetvideo'),
      allowNull: false,
      defaultValue: 'newsjet'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'switch_activity_splash',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
