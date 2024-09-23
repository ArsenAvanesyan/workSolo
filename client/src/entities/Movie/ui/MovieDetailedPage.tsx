import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../app/provider/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetailedPage = ({}): JSX.Element => {
  const { movies } = useContext(AppContext);
  const { id } = useParams<{ id: string | undefined }>();

  const myMovie = movies.find((mov) => mov.id === Number(id));

  const navigate = useNavigate();

  return (
    <>
      {myMovie && (
        <div>
          <h1 className="MovieDetailedPage">{myMovie.name}</h1>
          <img src={myMovie.img} />
          <h3>{myMovie.info}</h3>
          <button onClick={() => navigate(-1)}>Назад</button>
        </div>
      )}
    </>
  );
};

export default MovieDetailedPage;
