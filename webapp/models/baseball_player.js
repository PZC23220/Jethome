/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_player', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    avatar: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    bgimg: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('Female','Male'),
      allowNull: false,
      defaultValue: 'Male'
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    position: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    skill: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    uniform_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    teamclub_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    teamclub: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    teamnational_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    teamnational: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    detaildesc: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    hit_rate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: '0'
    },
    pit_rate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: '0'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'baseball_player',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
