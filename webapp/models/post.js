/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('post', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		nickname: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: ''
		},
		portrait: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		aid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		cid: {
			type: DataTypes.STRING(1024),
			allowNull: false
		},
		newstype: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		image_url: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		atime: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(1024),
			allowNull: false,
			defaultValue: ''
		},
		floor: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		reference: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		createdtime: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'post'
	});
};
