/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('topic_manual', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		keyword: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'topic_manual'
	});
};
