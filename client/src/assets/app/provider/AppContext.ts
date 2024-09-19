import { createContext, SetStateAction } from 'react';
import type { Universe } from '../../entities/Universe/types/Universe';

type InitialState = {
  universes: Universe[];
  setUniverses: (state: SetStateAction<Universe[]>) => void;
};

export const initialState: InitialState = {
  universes: [],
  setUniverses: () => {},
};

export const AppContext = createContext(initialState);