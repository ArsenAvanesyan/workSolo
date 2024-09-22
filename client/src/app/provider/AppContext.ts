/* eslint-disable import/prefer-default-export */
import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../../entities/User/types/user";
import { Movie } from "../../entities/Movie/types/movie";

// Определяем тип для состояния контекста
type initStateUser = {
  user: User | undefined
  setUser: Dispatch<SetStateAction<User|undefined>>
  movies: Movie | null
  setMovies: Dispatch<SetStateAction<Movie|null>>
}

// Начальное состояние
export const initState: initStateUser = {
  user: undefined,
  setUser: () => {},
  movies: null,
  setMovies: () => {},
};

// Создаем контекст
export const AppContext = createContext(initState);