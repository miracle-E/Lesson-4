'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    customer_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    product_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    price: DataTypes.FLOAT,
  }, {
  });
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Order.belongsToMany(Product, {
      through: 'order_details',
      as: "products",
      foreignKey: "order_id",
    });
    Order.hasMany(OrderDetail, { as: "order_details" });

  }
  return Order;
};