import React, { useContext } from 'react';
import { AppContext } from '../../app/provider/AppContext';

function MainPage(): JSX.Element {
  const { user } = useContext(AppContext)

  return (
    <div className="MainPage">
      {user && (
        <h1>Привет, {user.name}</h1>
      )}
    </div>
  );
}

export default MainPage;