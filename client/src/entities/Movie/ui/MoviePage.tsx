import React, { useContext, useEffect } from 'react';
import { Movie } from '../types/movie';
import { AppContext } from '../../../app/provider/AppContext';
import axiosInstance from '../../../services/axiosInstance';
import MovieItem from './MovieItem';
import MovieAdd from './MovieAdd';

const MoviePage = (): JSX.Element => {
  const { user, setMovies, movies } = useContext(AppContext);
  const getAllMovie = async () => {
    try {
      const response = await axiosInstance.get<{ movie: Movie[] }>('/movie');
      if (response.status === 200) {
        setMovies(response.data.movie);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllMovie();
  }, []);

  return (
    <div>
      <h1>Фильмы</h1>
      <div className="container">
        <div className="moviePage">
          {movies && (
            <div className="movieCards">
              {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} setMovies={setMovies} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
