"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img: {
        defaultValue:
          "https://yandex-images.clstorage.net/pR9x6Z383/b72a31rRbJW/zlXCjK4LntKPFA4BgvaX8tW2ebBYIL93P6nFeZ4ArXZuCA7c89RTlDQxBPgiuB1ezW13m-100_nh8VxIq8Mmh5tFFx35ml7TygbMkoR1k_eGsSl1CKb-dunq0LaQXTMrdVfUFy4LTVMiZsR4MqqPjcO05wHp54vt9CnXQXTbsFoCFYgOrx2d2IHJwUNIvp-_j3259I7p4Pi6usJ1kRH_pbDR2RzmgkoX4mRLcLF_gEBEMbvP4OuE7zxjlQN-krgQA1rBgSjSkZFJCwSAAj5StwfxOHzOZGS4NvbAsJpU9y3wkZYRLA8AmO_vjru_eIBFxrZ9j-lggiG_qBPG-NW7GsNUCUUg0V5ehYSEwUi22jmKOPk-zyAktrI6R_kR0P5iP1GZlaGIzV2u6Ag_fPiPSMwzfsrtIwEp_GFVyfmS-N1OncDAaJVengNCzgkMPBu6xvQ6tMIu4b7w_kgz0ZH2Zfoc3ZFkCwyV5imJuLVygoYH-jqP6eMELnasH4s5UHaeQFXBSSmbVdgIy8QMTfsfeYK1tD7Jo-B3NPqA_x1fMq_5FhxfJQCLXS-niz3_ugkCij20wu0vySs55h7JcB07WQeRSUhjVlMRgU7DxEW637pHfXExwyvsMLD4zvNdEH6h-FVUleuHD16uqUhwPXpGBcL9cwanb4ll92WTCTxa9lsAlkpJI1xf2sVHyshPetV4hvVzP05k5Tb7uABxFRlzKvJUm5akCIVbYaYFO7-0hkBNu7NBbGwGb_Bln8980zadRBzKRa8Rl5YIAkPPzLsTNwu8-XBNq6r8vXTAuF0WdSo8klHX44BK3uMkCHv4NU9FhTmziW9jTCy8oJhJvZzwH4JUQAkulhASDcPEhUI-HP2Dt_Rzy6pm9PizyD1SGL_gdtTbWW0IjdMu5Qh7MrBKyk19Osav6ALjMOdQQXMW8R6E2UcMqJpeGQ7GA42Afx34T7Rxdg6honY3tYL1G4",
        type: Sequelize.TEXT,
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
