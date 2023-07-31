'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CheckLists',
      [
        {
          employName: 'Мисывоа',
          mentorName: 'Димываа',
          progress: 0,
          userId: 2,
          sid: 'jkhkjh',
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: false,
          q6: false,
          q7: false,
          q8: false,
          questionInputValue: 'Паша Алена Влад',
          q9: false,
          q10: false,
          q11: false,
          q12: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CheckLists', null, {});
  },
};
