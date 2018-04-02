import React, { createContext } from 'react';
import list from '../list';

const Store = createContext({
  data: list
});

export default Store
