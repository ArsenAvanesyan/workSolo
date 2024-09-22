import React, { useContext, useEffect } from 'react';
import { Movie } from '../types/movie';
import { AppContext } from '../../../app/provider/AppContext';
import axiosInstance from '../../../services/axiosInstance';
import MovieItem from './movieItem';

type MoviePageProps = {
    movies: Movie[]
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

const MoviePage = ({movies, setMovies}: MoviePageProps): JSX.Element => {
  const {user} = useContext(AppContext)
  const getAllMovie = async () => {
    try {
      const response = await axiosInstance.get<{ movie: Movie[] }>("/movie")
      if(response.status === 200) {
        setMovies(response.data.movie)
      }
    } catch (error: any) {
      console.log(error.message);
      
    }
  }

  useEffect(() => {
    getAllMovie()
  }, [])

  return (
    <div className='moviePage'>
        <div>
            <h1>Фильмы</h1>
        </div>
        {movies && (
          <div>
            {movies.map((m) => (
              <MovieItem key={movie.id} movie={movie} setMovies={setMovies} />
            ))}
          </div>
        )}
    </div>
  );
};

export default MoviePage;
