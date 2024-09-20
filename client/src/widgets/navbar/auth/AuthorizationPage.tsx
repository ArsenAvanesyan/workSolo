import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest, setAccessToken } from "../../services/axiosInstanse";
import { NavLink } from "react-router-dom";

const AuthorizationPage: React.FC = () => {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosRequest.post("/auth/authorization", {
        email,
        password,
      });
      if (response.status === 200) {
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
        return;
      }
      setError("Произошла ошибка");
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1>Авторизоваться</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <div>
        <NavLink to="/registration">Зарегистрироваться</NavLink>
      </div>
    </div>
  );
};

export default AuthorizationPage;
