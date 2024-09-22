import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../app/provider/AppContext';
import MovieItem from './MovieItem';
import MovieAdd from './MovieAdd';

interface Movie {
  id: number;
  name: string;
  img: string;
  info: string;
  userId: number;
}


const UserMovies = (): JSX.Element => {
    const { movies, user, setMovies } = useContext(AppContext)
    const userMovies = movies.filter((mov) => mov.userId === user?.id)

  return (
    <div>
      <h2>Мои Фильмы</h2>
      {userMovies.length === 0 ? (
        <p>У вас нет добавленных фильмов.</p>
      ) : (
        <ul>
          {movies && <MovieAdd setMovies={setMovies} />}
          {userMovies &&
            userMovies.map((movie) => (
              <MovieItem movie={movie} setMovies={setMovies} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default UserMovies;
