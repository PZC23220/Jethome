/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('news_except_source_newsline', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		source: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		desc: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cid: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'all'
		},
		platform: {
			type: DataTypes.ENUM('all','ios','android'),
			allowNull: false,
			defaultValue: 'all'
		},
		update_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'news_except_source_newsline'
	});
};
