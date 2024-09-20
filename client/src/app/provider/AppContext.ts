/* eslint-disable import/prefer-default-export */
import { createContext, Dispatch, SetStateAction } from "react";

// Определяем тип для состояния контекста
interface AppContextType {
  user: { name: string } | null; // Здесь можно уточнить структуру пользователя
  setUser: Dispatch<SetStateAction<{ name: string } | null>>;
}

// Начальное состояние
const initState: AppContextType = {
  user: null,
  setUser: () => {},
};

// Создаем контекст
export const AppContext = createContext<AppContextType>(initState);