import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../widgets/navbar/auth/RegistrationPage';
import AuthorizationPage from '../../widgets/navbar/auth/AuthorizationPage';
import MoviePage from '../../entities/Movie/ui/MoviePage';
import ErrorPage from '../../error/ErrorPage';
import MovieDetailedPage from '../../entities/Movie/ui/MovieDetailedPage';

interface AppRoutersProps {
  movies: any[]; // Настройте тип в зависимости от вашей структуры фильма
  setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

const AppRouters: React.FC = () => {
  return (
    <Routes>
      <Route path="/" /> {/* Замените на ваш главный компонент */}
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movie/:id" element={<MovieDetailedPage />} />
      {/* <Route path="/movie/:movieId" element={<OneMoviePage />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouters;
