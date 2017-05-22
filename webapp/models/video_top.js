/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('video_top', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vid: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		cid: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		vcid: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		channel_id: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		site: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		score: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0.0000'
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		read_count: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		publish_time: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'video_top'
	});
};
