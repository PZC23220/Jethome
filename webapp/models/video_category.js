/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('video_category', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cid: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		channel: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		newstype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '2'
		},
		pos: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		fixed: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		icon: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		detaildesc: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		detailimg2x: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		detailimg3x: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		update_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'video_category'
	});
};
