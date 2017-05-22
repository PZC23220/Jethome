/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('feedback', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		content: {
			type: DataTypes.STRING(1024),
			allowNull: true
		}
	}, {
		tableName: 'feedback'
	});
};
