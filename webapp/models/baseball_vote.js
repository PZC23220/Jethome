/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseball_vote', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		leagueid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		league_name: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		matchid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		teamid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		team_desc: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		uid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		did: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		createtime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		detail_desc: {
			type: DataTypes.STRING(256),
			allowNull: true
		}
	}, {
		tableName: 'baseball_vote'
	});
};
