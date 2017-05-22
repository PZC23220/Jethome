/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('upgrade_info_girls', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		version_code: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		version_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
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
			type: DataTypes.ENUM('ios','android'),
			allowNull: false,
			defaultValue: 'ios'
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'upgrade_info_girls'
	});
};
