/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category_sub', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cid: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: ''
		},
		channel: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		parent_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			references: {
				model: 'category',
				key: 'id'
			}
		},
		description: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'category_sub'
	});
};
