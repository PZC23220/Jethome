/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('material_news_table', {
		aid: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		site: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: ''
		},
		url: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		source: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: ''
		},
		ctime: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		cid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: ''
		},
		title: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		likes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		h5content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		text_content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		related_news: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		imgs: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		thumbnail: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		type: {
			type: DataTypes.ENUM('normal','h5','source','h5v2'),
			allowNull: false,
			defaultValue: 'source'
		},
		head_available: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		url_id: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		keywords: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		created_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'material_news_table'
	});
};
