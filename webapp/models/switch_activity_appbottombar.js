/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('switch_activity_appbottombar', {
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
    btntext: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    act_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    shareImage: {
      type: DataTypes.STRING(256),
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
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'switch_activity_appbottombar',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
