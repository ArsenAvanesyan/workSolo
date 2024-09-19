"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Arsen",
          email: "12asddfada3@1asddfa23",
          password: "123",
          img: "https://a.d-cd.net/rVuYPKLXodS17Y8xHi768VdndJs-1920.jpg",
        },
        {
          name: "Rost",
          email: "12asasdasdddfada3@1asasdasdddfa23",
          password: "123",
          img: "https://memi.klev.club/uploads/posts/2024-05/memi-klev-club-cq6c-p-memi-sereznii-chelovek-20.jpg",
        },
        {
          name: "Arthur",
          email: "12asasa3@1asddfa23",
          password: "123",
          img: "https://avatars.mds.yandex.net/i?id=24dbed72625cc3bbdc27d8f5141720cf_l-8514130-images-thumbs&n=13",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
