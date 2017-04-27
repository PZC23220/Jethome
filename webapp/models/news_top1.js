/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_top1', {
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TIME: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    generation: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    init: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    plus: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    minus: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'news_top1',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
