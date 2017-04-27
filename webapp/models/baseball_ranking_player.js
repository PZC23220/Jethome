/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_ranking_player', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    playerid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    avatar: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    ranking: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fielding_pct: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rounds: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    putouts: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    assists: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    double_plays: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    triple_plays: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    passed_balls: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'baseball_ranking_player',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
