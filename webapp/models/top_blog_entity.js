/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('top_blog_entity', {
    aid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    atime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    click: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    share: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    star: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    comment: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    open_notification: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    top: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    create: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    plus_weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.0000'
    },
    minus_weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.0000'
    },
    plus_init: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.0000'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    cid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    site: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'top_blog_entity',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
