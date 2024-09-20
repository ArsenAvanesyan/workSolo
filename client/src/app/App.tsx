/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import RegistrationPage from '../widgets/navbar/auth/RegistrationPage';

function App(): JSX.Element {

  // const [movie, setMovie] = useState([])
  // const getOneMovie = async () => {
  //   const options = {
  // method: 'GET',
  // url: `https://api.kinopoisk.dev/v1.4/movie`,
  // headers: {accept: 'application/json', 'X-API-KEY': '5790B06-XATMD2B-N8C5996-AN2FRBP'}
  //  };
  //  axios
  //   .request(options)
  //   .then((response) => {
  //     setMovie(response.data.docs)
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  // console.log(movie);
  // // console.log(movie.id);
  
  

  // useEffect(()=> {
  //   getOneMovie()
  // }, [])

  return (
    <>
    <RegistrationPage />
    </>
  );
}

export default App;
