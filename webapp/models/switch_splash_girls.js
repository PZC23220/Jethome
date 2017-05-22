/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('switch_splash_girls', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		image2x: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		image3x: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		act_url: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		shareImage: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		skip: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		skip_duration: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '3'
		},
		validity_start: {
			type: DataTypes.TIME,
			allowNull: false
		},
		validity_end: {
			type: DataTypes.TIME,
			allowNull: false
		},
		showtimes: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		platform: {
			type: DataTypes.ENUM('ios','android'),
			allowNull: false,
			defaultValue: 'ios'
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
		tableName: 'switch_splash_girls'
	});
};
