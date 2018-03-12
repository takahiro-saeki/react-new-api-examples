import React, { createContext } from 'react';
import List from '../../Components/List';

const App = () => (
  <List 
    url="//dog.ceo/api/breeds/list/all"
    render={({list, isLoading}) => 
      isLoading ? <div>now loading...</div> : 
      <div onClick={() => console.log({list, isLoading})}>test</div>
    }/>
)

export default App;