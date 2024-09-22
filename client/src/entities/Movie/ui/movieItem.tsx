import React, { useContext, useState } from 'react';
// import './MovieItem.css';
import { Movie } from '../types/movie';
import { AppContext } from '../../../app/provider/AppContext';
import axiosInstance from '../../../services/axiosInstance';
import MovieUpdate from './MovieUpdate';
import { Link } from 'react-router-dom';

type MovieItemProps = {
  movie: Movie;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

const MovieItem: React.FC<MovieItemProps> = ({movie}: MovieItemProps): JSX.Element => {
  
  const { user, setMovies } = useContext(AppContext)
  const [isUpdating, setIsUpdating] = useState<boolean>(false)

  const onHandleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/movie/${movie.id}`)
      if (response.status === 200) {
        setMovies((prev) => prev.filter((d) => d.id !== movie.id))
        return
      }
    } catch ({response}) {
      console.log(response.data.message);
    }
  }

  return (
    <div className="movieItem">
      <h2>{movie.name}</h2>
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.img} alt={movie.name} />
      </Link>
      <h3>{movie.info}</h3>
      {user && (
        <>
          {user.id === movie.userId && (
            <div>
              <button onClick={onHandleDelete}>Удалить</button>
              <button onClick={() => setIsUpdating(!isUpdating)}>Обновить</button>
            </div>
          )}
        </>
      )}
      {isUpdating && (
        <MovieUpdate movie={movie} setMovies={setMovies} setIsUpdating={setIsUpdating} />
      )}
    </div>
  );
};

export default MovieItem;
