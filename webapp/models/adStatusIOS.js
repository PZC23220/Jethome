/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adStatusIOS', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		flurry: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		fb: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		fbListPlaceId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		adplace_first: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		per6: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		per6p: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'adStatusIOS'
	});
};
