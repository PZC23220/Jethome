/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fortuneV2', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		constellation: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		fortune: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'fortuneV2'
	});
};
