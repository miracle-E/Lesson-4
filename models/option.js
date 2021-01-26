'use strict';
module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
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
  Option.associate = function (models) {
    // associations can be defined here
    Option.belongsToMany(Product, {
      through: 'product_options',
      as: "products",
      foreignKey: "option_id",
    });

  }
  return Option;
};