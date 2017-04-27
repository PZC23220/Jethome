/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('switch_activity_info', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    subtitle: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    detail_desc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    activity_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    activity_target_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    activity_target_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cid: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'switch_activity_info',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
