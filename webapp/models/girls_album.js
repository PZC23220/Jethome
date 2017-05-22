/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('girls_album', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cid: {
			type: DataTypes.STRING(32),
			allowNull: true,
			defaultValue: ''
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		title: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		detaildesc: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		role: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		cover_img: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		bg_img: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		active: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'girls_album'
	});
};
