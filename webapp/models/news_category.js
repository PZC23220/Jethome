/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cid: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    channel: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    pos: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    fixed: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    detaildesc: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    detailimg2x: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    detailimg3x: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    videocid: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    videochannel: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    plus_weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.0000'
    },
    minus_weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.0000'
    },
    plus_init: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.0000'
    },
    active: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'news_category',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
