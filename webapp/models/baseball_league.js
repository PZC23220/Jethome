/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseball_league', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: ''
		},
		logo: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		nationality: {
			type: DataTypes.STRING(64),
			allowNull: true
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
		sessions: {
			type: DataTypes.STRING(512),
			allowNull: true
		},
		session_current: {
			type: DataTypes.STRING(512),
			allowNull: true
		},
		detaildesc: {
			type: DataTypes.STRING(2048),
			allowNull: true
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'baseball_league'
	});
};
