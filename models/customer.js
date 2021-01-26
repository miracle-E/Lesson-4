'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    amount: DataTypes.FLOAT,
    shipping_address: DataTypes.STRING,
    order_address: DataTypes.STRING,
    order_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_date: DataTypes.DATE
  }, {
  });
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.hasMany(Order, {
as: 'orders', 
foreignKey:"customer_id"
   });


  }
  return Customer;
};