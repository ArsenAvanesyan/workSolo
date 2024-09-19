const { User, Favorite } = require("../db/models");

class FavoritesService {
  static createLike = async (userId, kinoId) => {
    const newLike = await Favorite.create({ userId, kinoId });
    return newLike ? newLike.get() : null;
  };

  static deleteLike = async (userId, kinoId) => {
    const delLike = await Favorite.destroy({ where: { userId, kinoId } });
    console.log(delLike);

    return delLike ? delLike : null;
  };
}

module.exports = FavoritesService;
