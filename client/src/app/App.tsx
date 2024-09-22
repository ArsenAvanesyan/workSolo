import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import { AppContext } from "./provider/AppContext";
import AppRouters from "./provider/AppRouters";
import Navbar from '../widgets/navbar/Navbar';
import type { User } from '../entities/User/types/user';
import { Movie, MovieResponse, MovieWithoutIdSecond } from '../entities/Movie/types/movie';
import { Routes } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';


function App(): JSX.Element {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [movies, setMovies] = useState<Movie[]>([])
  console.log(movies)

  const state = useMemo(() => ({ user, setUser, movies, setMovies }), [user, movies]);


  useEffect(() => {
    axiosInstance.get('/movie').then((data: AxiosResponse<MovieResponse>) => setMovies(data.data.movie)).catch(console.log)
  }, []);

  return (
    <AppContext.Provider value={state}>
      <Navbar />
      <AppRouters />
    </AppContext.Provider>
  );
}

export default App;
