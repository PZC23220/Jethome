/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adStatusAndroid', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    flurry: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    fb: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    adplace_first: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    percommon: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    app_platform: {
      type: "SET('NEWSJET','FUNJET','NEWSLINE')",
      allowNull: false,
      defaultValue: 'newsjet'
    }
  }, {
    tableName: 'adStatusAndroid',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
