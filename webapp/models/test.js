/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('test', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		test: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		test2: {
			type: DataTypes.STRING(11),
			allowNull: true,
			unique: true
		}
	}, {
		tableName: 'test'
	});
};
