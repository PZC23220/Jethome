/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('material_gif', {
		aid: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(512),
			allowNull: true,
			defaultValue: ''
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		frames: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		size: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		share_count: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		site: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		cp_id: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		thumbnail: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ctime: {
			type: DataTypes.TIME,
			allowNull: true
		},
		mtime: {
			type: DataTypes.TIME,
			allowNull: true
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		dislikes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		cid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: 'gif'
		},
		keywords: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(1024),
			allowNull: true
		},
		id: {
			type: DataTypes.STRING(64),
			allowNull: true,
			unique: true
		},
		last_update: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'material_gif'
	});
};
