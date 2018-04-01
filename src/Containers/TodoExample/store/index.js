import React, { createContext } from 'react';
import list from '../list';

const store = createContext({
  data: list
});

export default store
