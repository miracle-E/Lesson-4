'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_categories = sequelize.define('product_categories', {
    product_id: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {});
  product_categories.associate = function (models) {
    // associations can be defined here
  };
  return product_categories;
};