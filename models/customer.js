'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
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
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.belongsToMany(Product, {
      through: 'product_categories',
      as: "products",
      foreignKey: "category_id",
    });

  }
  return Customer;
};