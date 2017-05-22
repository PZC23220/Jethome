/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('material_video', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		video_id: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		cid: {
			type: DataTypes.STRING(16),
			allowNull: true,
			defaultValue: ''
		},
		vcid: {
			type: DataTypes.STRING(16),
			allowNull: true,
			defaultValue: ''
		},
		title: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		site: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: ''
		},
		source: {
			type: DataTypes.STRING(64),
			allowNull: true,
			defaultValue: ''
		},
		url: {
			type: DataTypes.STRING(256),
			allowNull: true,
			defaultValue: ''
		},
		thumbnail: {
			type: DataTypes.STRING(256),
			allowNull: true,
			defaultValue: ''
		},
		publish_time: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		read_count: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		video_width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		video_height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		thumbnail_width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		thumbnail_height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_name: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		user_portrait: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		channel_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		category_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		keywords: {
			type: DataTypes.STRING(2048),
			allowNull: true
		},
		created_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'material_video'
	});
};
