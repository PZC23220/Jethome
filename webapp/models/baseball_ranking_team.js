/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseball_ranking_team', {
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
		teamid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		teamdesc: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		ranking: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		rounds: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		win: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		lose: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		score: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		win_rate: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		games_behind: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		updatetime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'baseball_ranking_team'
	});
};
