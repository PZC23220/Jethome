/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('video_channel', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    channel_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    cid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vcid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_top: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    pick_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5'
    },
    site: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'video_channel',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
