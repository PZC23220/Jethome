/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('news_info', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		site: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		source: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		favicon: {
			type: DataTypes.STRING(128),
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('trans','source','mix','h5content'),
			allowNull: true,
			defaultValue: 'source'
		},
		deftype: {
			type: DataTypes.ENUM('trans','source','mix','h5content'),
			allowNull: true,
			defaultValue: 'source'
		},
		color: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		bg: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		font_color: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		ad_small: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		ad_large: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		ad_android: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		ad_ios: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		updatedtime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		createdtime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'news_info'
	});
};
