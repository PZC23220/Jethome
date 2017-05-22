/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('topic_subject', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: ''
		},
		subtitle: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		cid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: ''
		},
		subject_cid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		url: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		imgs: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		bg_img: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		detail_desc: {
			type: DataTypes.STRING(512),
			allowNull: true
		},
		sharing_desc: {
			type: DataTypes.STRING(512),
			allowNull: true
		},
		list_pos: {
			type: DataTypes.INTEGER(11),
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
		app_platform: {
			type: "SET('NEWSJET','FUNJET','NEWSLINE','NEWSJETVIDEO')",
			allowNull: false,
			defaultValue: 'newsjet'
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		active: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'topic_subject'
	});
};
