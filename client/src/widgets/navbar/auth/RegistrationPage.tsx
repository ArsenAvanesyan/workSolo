import React, { useContext, useState } from 'react';
import { AppContext } from '../../../app/provider/AppContext';
import axiosInstance, {  setAccessToken } from '../../../services/axiosInstanse';


 function RegistrationPage():JSX.Element {
  const { setUser } = useContext(AppContext);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [check, setCheck] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [hidden, setHidden] = useState<boolean>(false);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {
    console.log(name,email,img,password)

    e.preventDefault();
    if (password === check) {
      try {
        const response = await axiosInstance.post('/auth/registration', {
          name,
          email,
          img,
          password,
        });
        console.log(response)
        if (response.status === 201) {
          console.log(response.data);
          setUser(response.data.user);
          setAccessToken(response.data.accessToken);
          
        }
      } catch ({ response }) {
        console.log(response.data.message);
      }
    } else {
      setError('Пароли не совпадают');
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type={hidden ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='button' onClick={() => setHidden((prev) => !prev)}>
          look
        </button>
        <input
          type='password'
          value={check}
          onChange={(e) => setCheck(e.target.value)}
        />
        <button type='submit'>registration</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
