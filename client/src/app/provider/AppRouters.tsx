import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../widgets/navbar/auth/RegistrationPage';
import AuthorizationPage from '../../widgets/navbar/auth/AuthorizationPage';
import MoviePage from '../../entities/Movie/ui/MoviePage';
import ErrorPage from '../../error/ErrorPage';
import MovieDetailedPage from '../../entities/Movie/ui/MovieDetailedPage';
import MainPage from '../../page/Main/MainPage';
import UserMovies from '../../entities/Movie/ui/UserMovies';

interface AppRoutersProps {
  movies: any[]; // Настройте тип в зависимости от вашей структуры фильма
  setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}
// button onClick navigate(-1)
const AppRouters: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movie/:id" element={<MovieDetailedPage />} />
      <Route path="/profile" element={<UserMovies />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouters;
