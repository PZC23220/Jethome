/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_match', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    location_country: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    location_detail: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    court: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    leagueid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    session: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    teamoneid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    teamonedesc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    teamtwoid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    teamtwodesc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    homecourtid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    score_common: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    score_final: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    score_hit: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    score_error: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    detaildesc: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    livereport: {
      type: DataTypes.STRING(8192),
      allowNull: true
    },
    lotteryid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '-1'
    },
    newsids: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'baseball_match',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
