/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('girls_category', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		name_jp: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		name_en: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		name_cn: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		position: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		icon: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		detaildesc: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		active: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'girls_category'
	});
};
