/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('kiji_unit', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		unit_id: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: ''
		},
		status: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '1'
		},
		extra: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		is_checked: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'kiji_unit'
	});
};
