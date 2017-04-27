/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gif_cp', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    site: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    item: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    last_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    min_duration: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    min_frame: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    min_share: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    min_size: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    min_frame_size: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'gif_cp',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
