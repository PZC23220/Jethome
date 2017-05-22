/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comment_template', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cid: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		keywords: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'comment_template'
	});
};
