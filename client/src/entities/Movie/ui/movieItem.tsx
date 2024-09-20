import React, { useContext } from 'react';
import './movieItem.css';
import { Movie } from '../types/movie';
import { AppContext } from '../../../app/provider/AppContext';
import { AxiosResponse } from 'axios';

type movieItemProps = {
  movie: Movie
}

const movieItem = ({movie}: movieItemProps): JSX.Element => {
  const { setMovies } = useContext(AppContext)
  return (
    <div className='movieItem'>
    </div>
  );
};

export default movieItem;
