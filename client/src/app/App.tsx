import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AppContext } from './provider/AppContext';
import AppRouters from './provider/AppRouters';
import Navbar from '../widgets/navbar/Navbar';
import type { User } from '../entities/User/types/user';
import { Movie, MovieResponse } from '../entities/Movie/types/movie';
import axiosInstance, { setAccessToken } from '../services/axiosInstance';

function App(): JSX.Element {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [movies, setMovies] = useState<Movie[]>([]);

  const state = useMemo(() => ({ user, setUser, movies, setMovies }), [user, movies]);

  type UserResponse = {
    message: string;
    user: User;
    accessToken: string;
  };

  const getAllMovie = async (): Promise<void> => {
    axiosInstance
      .get('/movie')
      .then((data: AxiosResponse<MovieResponse>) => setMovies(data.data.movie))
      .catch(console.log);
  };

  const checkUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse<UserResponse> = await axiosInstance.get('/tokens/refresh');
      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        setUser(response.data.user);
        
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(axiosError)) {
        throw new Error(axiosError.message);
      }
      throw new Error('Some error');
    }
  };
  

  useEffect(() => {
    getAllMovie();
    checkUser();
  }, []);

  return (
    <AppContext.Provider value={state}>
      <Navbar />
      <AppRouters />
    </AppContext.Provider>
  );
}

export default App;
