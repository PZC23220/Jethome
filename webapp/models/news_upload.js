/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_upload', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    publish_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    image1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    site: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relatedTitle1: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relatedLink1: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relatedTitle2: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relatedLink2: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relatedTitle3: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relatedLink3: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'news_upload',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
