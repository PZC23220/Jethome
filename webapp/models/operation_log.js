/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('operation_log', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		action: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: ''
		},
		table: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		parameters: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		role: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: ''
		},
		result: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: ''
		},
		extra: {
			type: DataTypes.STRING(1024),
			allowNull: true
		}
	}, {
		tableName: 'operation_log'
	});
};
