/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_top', {
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cid: {
      type: DataTypes.STRING(255),
      allowNull: true
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
      allowNull: true
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
    tableName: 'news_top',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
