/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topic_forbidden', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    min_length: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'topic_forbidden',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
