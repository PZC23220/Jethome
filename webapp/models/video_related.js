/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('video_related', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		related_video_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		video_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		site: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		read_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		thumbnail: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		thumbnail_width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		thumbnail_height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		video_width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		video_height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		publish_time: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		user_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		user_portrait: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'video_related'
	});
};
