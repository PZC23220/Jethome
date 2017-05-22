/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('news_special_topic', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		subtitle: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		cid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: ''
		},
		topic_cid: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		topic_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		imgs: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		bg_img: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		bg_img_top: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		bg_img_category: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		detail_desc: {
			type: DataTypes.STRING(512),
			allowNull: true
		},
		open_action: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		open_action_info: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: 'ext://default/'
		},
		show_type_outside: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		show_outside_news_rows: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '2'
		},
		show_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		pos: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			defaultValue: '0'
		},
		is_toplist: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		toplist_pos: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		news_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		include_news: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		app_platform: {
			type: "SET('NEWSJET','FUNJET','NEWSLINE','NEWSJETVIDEO')",
			allowNull: false,
			defaultValue: 'newsjet'
		},
		keyword_inclusion: {
			type: DataTypes.STRING(512),
			allowNull: false
		},
		keyword_exclusion: {
			type: DataTypes.STRING(512),
			allowNull: false
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'news_special_topic'
	});
};
