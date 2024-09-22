const { Movie } = require("../db/models");

class MovieService {
  static getAllMovies = async () => (await Movie.findAll()).map((m) => m.get());

  static getMovieByPk = async (id) => {
    const movie = await Movie.findByPk({where: {id}});
    return movie ? movie.get() : null;
  };

  static createMovie = async ({ userId, name, img, info }) => {
    let movie = await Movie.create({
      userId,
      name,
      img,
      info,
    });
    return movie;
  };

  static updateMovie = async (
    id,
    userId,
    { title, img, info, price, art, quantity }
  ) => {
    let movie = await Movie.findOne({ where: { id, userId } });
    if (!movie) {
      return null;
    }
    movie = await Movie.update(
      { title, img, info, price, art, quantity },
      { where: { id, userId } }
    );
    movie = await Movie.findByPk(id);
    return movie ? movie.get() : null;
  };

  static deleteMovie = async (id, userId) => {
    const movie = await Movie.findOne({ where: { id, userId } });
    if (movie) {
      await movie.destroy();
      return true;
    }
    return false;
  };
}

module.exports = MovieService;
