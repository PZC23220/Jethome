/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('upgrade_info', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		version_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		version_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subtitle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		platform: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		app_platform: {
			type: DataTypes.ENUM('newsjet','funjet','newsline'),
			allowNull: false,
			defaultValue: 'newsjet'
		}
	}, {
		tableName: 'upgrade_info'
	});
};
