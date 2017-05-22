/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('push_config', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		android_auth_key: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		app_platform: {
			type: DataTypes.ENUM('newsjet','funjet','newsline'),
			allowNull: true,
			defaultValue: 'newsjet'
		}
	}, {
		tableName: 'push_config'
	});
};
