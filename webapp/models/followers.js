/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('followers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		follow: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		uid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		createdtime: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'followers'
	});
};
