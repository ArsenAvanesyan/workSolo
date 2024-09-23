import React, { useContext } from 'react';
import { AppContext } from '../../app/provider/AppContext';

function MainPage(): JSX.Element {
  const { user } = useContext(AppContext)

  return (
    <div className="MainPage">
      {user && <h1>Привет, {user.name}</h1>}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img
        src="https://avatars.mds.yandex.net/i?id=3ac9389bf5d4b28f85136e2c9fa36910_l-4307487-images-thumbs&n=13"
        alt="Welcome"
      />
    </div>
  );
}

export default MainPage;