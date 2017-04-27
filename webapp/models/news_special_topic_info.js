/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_special_topic_info', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    news_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    news_cid: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    news_title: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    news_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    news_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    bg_img: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    detail_desc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    pos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    stick_at_top: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'news_special_topic_info',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
