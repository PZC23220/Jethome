/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotion_iphone7', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'promotion_iphone7',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
};
