const { where } = require("sequelize");
const { User, Favorite } = require("../db/models");

class UserServices {
  static getUser = async (email) => {
    const user = await User.findOne({
      where: { email },
      include: [{ model: Favorite }],
    });

    return user ? user.get() : null;
  };

  static createUser = async ({ name, email, password, seller }) => {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = User.create({ name, email, password, seller });
      return user;
    }
    return null;
  };
}

module.exports = UserServices;
