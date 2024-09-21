import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../app/provider/AppContext';
import axiosInstance, { axiosRequest, setAccessToken } from '../../services/axiosInstance';
import { User } from '../../entities/User/types/user';

function Navbar(): JSX.Element {

  const { user, setUser } = useContext(AppContext);

  const onHandleLogout = async () => {
    try {
      const response = await axiosInstance.delete('/auth/logout');

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
          <NavLink to="/movie">Фильмы</NavLink>
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
