/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crawler_selector', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> title'
    },
    link: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> link'
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> description'
    },
    site: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> site'
    },
    source: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> source'
    },
    item: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> item'
    },
    item_title: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> title'
    },
    item_link: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> link'
    },
    item_description: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> description'
    },
    item_content: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: '> content'
    },
    item_content_html: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'article'
    },
    item_content_image: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'img'
    },
    item_site: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> site'
    },
    item_source: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> source'
    },
    item_time: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '> pubDate'
    },
    item_time_pattern: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'EEE, dd MMM yyyy HH:mm:ss Z'
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'crawler_selector',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
