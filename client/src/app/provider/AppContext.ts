/* eslint-disable import/prefer-default-export */
import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../../entities/User/types/user";

// Определяем тип для состояния контекста
type initStateUser = {
  user: User | undefined
  setUser: Dispatch<SetStateAction<User|undefined>>
}

// Начальное состояние
export const initState: initStateUser = {
  user: undefined,
  setUser: () => {},
};

// Создаем контекст
export const AppContext = createContext(initState);