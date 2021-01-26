'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    create_date: DataTypes.Date
  });

  Product.associate = function (models) {
    // associations can be defined here
    Product.hasMany(models.Order, { as: 'orders' });
    Product.hasMany(models.Category, { as: 'categories' });
    Product.hasMany(models.Option, { as: 'options' });

    return Product;
  };
}