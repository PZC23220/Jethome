/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('girls_single', {
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
		title: {
			type: DataTypes.STRING(128),
			allowNull: true,
			defaultValue: ''
		},
		role: {
			type: DataTypes.STRING(32),
			allowNull: true,
			defaultValue: ''
		},
		pic_height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pic_width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		thumbnail: {
			type: DataTypes.STRING(256),
			allowNull: true,
			defaultValue: ''
		},
		img: {
			type: DataTypes.STRING(256),
			allowNull: true,
			defaultValue: ''
		},
		img_original_site: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		referer: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		albumid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		active: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'girls_single'
	});
};
