'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    order_id: {
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
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    sku: {
      type: DataTypes.VARCHAR,
      allowNull: false,
      unique: true
    } 
  },
    
    );
  OrderDetail.associate = function (model) {
    OrderDetail.belongsTo(Order, {
      foreignKey: "order_id",
      as: "order",
    });

 }
  return OrderDetail;
};