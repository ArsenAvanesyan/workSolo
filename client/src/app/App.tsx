/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import axios from 'axios';
import { AppContext } from "./provider/AppContext";
import AppRouters from "./provider/AppRouters";
import Navbar from '../widgets/navbar/Navbar';
import type { User } from '../entities/User/types/user';

function App(): JSX.Element {

  const [user, setUser] = useState<User | undefined>(undefined)

  const stateUser = useMemo(() => ({
    user, setUser
  }), [user])

  const [movie, setMovie] = useState([])
  const [movies, setMovies] = useState([])

  const getOneMovie = async () => {
    const options = {
  method: 'GET',
  url: `https://api.kinopoisk.dev/v1.4/movie/666`,
  headers: {accept: 'application/json', 'X-API-KEY': '5790B06-XATMD2B-N8C5996-AN2FRBP'}
   };
   axios
   .get("/api/movie")
    .request(options)
    .then((response) => {
      setMovie(response.data.docs)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const getAllMovies = async () => {

  const options = {
    method: 'GET',
    url: 'https://api.kinopoisk.dev/v1.4/list?page=1&limit=5&updatedAt=',
    headers: {accept: 'application/json', 'X-API-KEY': '5790B06-XATMD2B-N8C5996-AN2FRBP'}
  };
  
  axios
    .request(options)
    .then(function (response) {
      setMovies(response.data.docs)
    })
    .catch(function (error) {
      console.error(error);
    });
}

  useEffect(()=> {
    getOneMovie()
    getAllMovies()
  }, [])



  return (
    <AppContext.Provider value={stateUser}>
      <Navbar />
      <AppRouters />
    </AppContext.Provider>
  );
}

export default App;
