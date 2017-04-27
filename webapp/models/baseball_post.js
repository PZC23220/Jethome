/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baseball_post', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    did: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    nickname: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    portrait: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    targettype: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    targetid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    targetimage: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    targeturl: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      defaultValue: ''
    },
    likes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    floor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    reference: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    updatetime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'baseball_post',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
