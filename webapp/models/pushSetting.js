/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pushSetting', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		aid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		pushtime: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		newstype: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		custominfo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		pushtitle: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		pushbody: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		createtime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		app_platform: {
			type: DataTypes.ENUM('newsjet','girlsdaily'),
			allowNull: true,
			defaultValue: 'newsjet'
		},
		isPush: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'pushSetting'
	});
};
