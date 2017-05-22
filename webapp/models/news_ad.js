/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('news_ad', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		info_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ad_type: {
			type: DataTypes.ENUM('admob','facebook'),
			allowNull: true,
			defaultValue: 'facebook'
		},
		placement_android: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		placement_ios: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'news_ad'
	});
};
