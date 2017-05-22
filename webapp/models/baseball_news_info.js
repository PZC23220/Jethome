/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseball_news_info', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		targettype: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		targetid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		news_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		news_cid: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: ''
		},
		news_title: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		news_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		news_ctime: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		bg_img: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		detail_desc: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		pos: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		updatetime: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		active: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'baseball_news_info'
	});
};
