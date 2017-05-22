/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userinfo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		age: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		createdtime: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		platform: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		sex: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		updatedtime: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		userid: {
			type: DataTypes.STRING(34),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: 'userinfo'
	});
};
