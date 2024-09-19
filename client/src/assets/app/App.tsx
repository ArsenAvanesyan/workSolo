import React, { useEffect, useMemo, useState } from 'react';

import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { Universe } from '../entities/Universe/types/universe';
import UniverseItem from '../entities/Universe/ui/UniverseItem';
import './App.css';
import { AppContext } from './provider/AppContext';
import AppRouters from './provider/AppRouters';

type UniverseResponse = {
  message: string;
  universes: Universe[];
};

function App(): JSX.Element {
  const [universes, setUniverses] = useState<Universe[]>([]);

  useEffect(() => {
    axios
      .get('/api/universes')
      .then((data: AxiosResponse<UniverseResponse>) => setUniverses(data.data.universes))
      .catch(console.log);
  }, []);

  );

  return (
    <AppContext.Provider value={state}>
      <h1>asds</h1>
      <AppRouters />
    </AppContext.Provider>
  );
}

export default App;