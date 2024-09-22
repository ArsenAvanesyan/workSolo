// const { where } = require("sequelize");
const { User } = require("../db/models");

class UserServices {
  static getUser = async (email) => {
    const user = await User.findOne({
      where: { email }
    });

    return user ? user.get() : null;
  };

  static createUser = async ({ name, email, password, img }) => {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = User.create({ name, email, password, img });
      return user;
    }
    return null;
  };
}

module.exports = UserServices;
