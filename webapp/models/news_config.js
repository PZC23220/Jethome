/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('news_config', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'news_config'
	});
};
