'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
  });
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsToMany(Product, {
      through: 'product_categories',
      as: "products",
      foreignKey: "category_id",
    });

  }
  return Category;
};