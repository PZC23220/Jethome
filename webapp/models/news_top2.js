/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_top2', {
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    cid: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    TIME: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    count: {
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
    }
  }, {
    tableName: 'news_top2',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
