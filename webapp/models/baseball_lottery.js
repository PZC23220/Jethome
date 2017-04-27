/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_lottery', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    targettype: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    targetid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    award: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    detaildesc: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'baseball_lottery',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
