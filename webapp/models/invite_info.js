/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invite_info', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		inviting_uid: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		receive_did: {
			type: DataTypes.STRING(256),
			allowNull: false,
			unique: true
		},
		ip: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		update_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		mac: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		imei: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'invite_info'
	});
};
