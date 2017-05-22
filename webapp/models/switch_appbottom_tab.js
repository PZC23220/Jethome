/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('switch_appbottom_tab', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		position: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		btn_text: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		btn_text_argb: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		btn_text_argb_hl: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		btn_image2x: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		btn_image2x_hl: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		btn_image3x: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		btn_image3x_hl: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		btn_uri: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		badge_text: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		badge_argb: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		badge_argb_hl: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		badge_showtype: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		app_version: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		updatetime: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'switch_appbottom_tab'
	});
};
