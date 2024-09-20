import { createContext, SetStateAction } from 'react';
import type { Movie } from '../../entities/Universe/types/Universe';

type InitialState = {
  movies: Movies[];
  setUniverses: (state: SetStateAction<Movie[]>) => void;
};

export const initialState: InitialState = {
  movies: [],
  setUniverses: () => {},
};

export const AppContext = createContext(initialState);