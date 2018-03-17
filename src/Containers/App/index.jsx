import React, { createContext } from 'react';
import List from '../../Components/List';

const App = () => (
  <List
    apiPath="//dog.ceo/api/breeds/list/all"
    render={
      ({list, isLoading}) => isLoading ? <div>now loading...</div> : <div>Done!</div>
    }/>
)

export default App;
