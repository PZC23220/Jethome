/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('video_site_top', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    cid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    vcid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    site: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    publish_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'video_site_top',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
