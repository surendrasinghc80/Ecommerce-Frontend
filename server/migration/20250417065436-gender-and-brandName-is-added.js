"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "gender", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("products", "brandName", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("products", "gender");
    await queryInterface.removeColumn("products", "brandName");
  },
};
