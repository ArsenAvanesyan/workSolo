import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../app/provider/AppContext';
import axiosInstance, { setAccessToken } from '../../../services/axiosInstance';
import axios, { AxiosError } from 'axios';

function RegistrationPage(): JSX.Element {
  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [check, setCheck] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [hidden, setHidden] = useState<boolean>(false);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    
    e.preventDefault();
    if (password === check) {
      try {
        const response = await axiosInstance.post('/auth/registration', {
          name,
          email,
          img,
          password,
        });
        console.log(response);
        if (response.status === 201) {
          console.log(response.data);
          setUser(response.data.user);
          setAccessToken(response.data.accessToken);
          navigate('/');
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axios.isAxiosError(axiosError)) {
          throw new Error(axiosError.message);
        }
        throw new Error('Some error');
      }
    } else {
      setError('Пароли не совпадают');
    }
  };

  return (
    <div>
      <h1>Зарегистрироваться</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit}>
        <input
          placeholder="Имя"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Почта"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input placeholder="Фото" type="url" value={img} onChange={(e) => setImg(e.target.value)} 
        />
        <input
          placeholder="Пароль"
          type={hidden ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setHidden((prev) => !prev)}>
          👁️
        </button>
        <input
          placeholder="Подтвердите пароль"
          type="password"
          value={check}
          onChange={(e) => setCheck(e.target.value)}
        />
        <button type="submit" >Зарегистрироваться</button>
        {/* <div>
          <NavLink to="/authorization">Авторизоваться</NavLink>
        </div> */}
      </form>
    </div>
  );
}

export default RegistrationPage;
