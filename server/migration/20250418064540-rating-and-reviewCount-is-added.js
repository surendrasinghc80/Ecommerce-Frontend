"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "rating", {
      type: Sequelize.FLOAT,
      allowNull: true,
    });

    await queryInterface.addColumn("products", "reviewCount", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("products", "rating");
    await queryInterface.removeColumn("products", "reviewCount");
  },
};
