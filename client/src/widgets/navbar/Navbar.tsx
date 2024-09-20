import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../app/AppContext';
import { axiosRequest, setAccessToken } from '../../services/axiosInstance';

const Navbar: React.FC = () => {
  const { user, setUser } = useContext(AppContext);

  const onHandleLogout = async () => {
    try {
      const response = await axiosRequest.delete('/auth/logout');

      if (response.status === 200) {
        setUser(undefined);
        setAccessToken('');
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <nav>
      <ul>
        {user && (
          <li>
            <p>{`Привет, ${user.name}!`}</p>
          </li>
        )}
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Регистрация</NavLink>
        </li>
        <li>
          <NavLink to="/authorization">Авторизация</NavLink>
        </li>
        {user && <button onClick={onHandleLogout}>Выход</button>}
      </ul>
    </nav>
  );
};

export default Navbar;
