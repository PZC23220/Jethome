/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_ranking_hit', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    leagueid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    leaguename: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    playerid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    player_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    player_avatar: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    allianceid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    alliance_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    local_hits: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    run_batted_in: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    out_base_percentage: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    hits: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    stolen_bases: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    win: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    winning_pct: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    strike_out: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    base_on_balls: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    hold_point: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    tableName: 'baseball_ranking_hit',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
