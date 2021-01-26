'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_options = sequelize.define('product_options', {
    option_id: DataTypes.STRING,
    product_id: DataTypes.STRING
  }, {});
  product_options.associate = function (models) {
    // associations can be defined here
  };
  return product_options;
};