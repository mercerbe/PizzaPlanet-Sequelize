'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('pizza', [
        {pizza_name: "cheese", devoured: false, createdAt: new Date(), updatedAt: new Date()},
        {pizza_name: "pepperoni", devoured: false, createdAt: new Date(), updatedAt: new Date()},
        {pizza_name: "veggie", devoured: false, createdAt: new Date(), updatedAt: new Date()},
        {pizza_name: "white pizza", devoured: false, createdAt: new Date(), updatedAt: new Date()},
        {pizza_name: "custom", devoured: false, createdAt: new Date(), updatedAt: new Date()}
      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      truncate: true resets primary key
    */
      return queryInterface.bulkDelete('pizza', null, {truncate:true})
  }
};
