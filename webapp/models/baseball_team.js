/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseball_team', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		name_jpn: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		logo: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		bgimg: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		clubtype: {
			type: DataTypes.ENUM('national','club'),
			allowNull: true
		},
		leagueid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		team_alliance_name: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		createtime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatetime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		ranking: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		headquarters: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		league_win_times: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		jps_win_times: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		playerids: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		detaildesc: {
			type: DataTypes.STRING(2048),
			allowNull: true
		},
		pastseasondesc: {
			type: DataTypes.STRING(2048),
			allowNull: true
		},
		nextmatch: {
			type: DataTypes.STRING(256),
			allowNull: true,
			defaultValue: ''
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'baseball_team'
	});
};
