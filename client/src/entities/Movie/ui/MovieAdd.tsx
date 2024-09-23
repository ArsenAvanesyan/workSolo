import React, { useState } from "react";
import axiosInstance from "../../../services/axiosInstance";

interface MovieAddProps {
  setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

const MovieAdd: React.FC<MovieAddProps> = ({ setMovies }): JSX.Element => {
  const [userId, setUserId] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post("/movie", {
        name,
        img,
        info,
      });

      if (response.status === 201) {
        setMovies((prev) => [...prev, response.data.movie]);
        setName("");
        setImg("");
        setInfo("");
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          placeholder="Название"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Обложка"
          type="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          placeholder="Информация"
          type="text"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <button type="submit">Добавить Фильм</button>
      </form>
    </div>
  );
};

export default MovieAdd;
