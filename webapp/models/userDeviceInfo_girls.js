/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userDeviceInfo_girls', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uid: {
			type: DataTypes.STRING(34),
			allowNull: true
		},
		did: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: ''
		},
		token: {
			type: DataTypes.STRING(156),
			allowNull: false,
			defaultValue: ''
		},
		deviceType: {
			type: DataTypes.ENUM('ios','android'),
			allowNull: true,
			defaultValue: 'ios'
		},
		appVersion: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: ''
		},
		update_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'userDeviceInfo_girls'
	});
};
