import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../../page/Main/MainPage'));

function AppRouters(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default AppRouters;