/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_greped', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      defaultValue: ''
    },
    likes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    createdtime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'post_greped',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
