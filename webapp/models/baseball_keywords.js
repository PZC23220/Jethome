/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseball_keywords', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		team: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		inclusion: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		exclusion: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'baseball_keywords'
	});
};
