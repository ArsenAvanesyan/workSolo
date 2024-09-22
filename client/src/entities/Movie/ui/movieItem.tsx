import React, { useContext, useState } from 'react';
// import './MovieItem.css';
import { Movie } from '../types/movie';
import { AppContext } from '../../../app/provider/AppContext';
import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';

type MovieItemProps = {
  movie: Movie;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

const MovieItem: React.FC<MovieItemProps> = ({movie}: MovieItemProps): JSX.Element => {
  const { user } = useContext(AppContext)
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
    <div className='movieItem'>
      
    </div>
  );
};

export default MovieItem;
