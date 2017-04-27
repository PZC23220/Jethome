/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_authors', {
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
    logo: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    background: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    list_url: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: true
    },
    item_selector: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    cid: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: 'blog'
    },
    extra: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    selector_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'blog_authors',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
