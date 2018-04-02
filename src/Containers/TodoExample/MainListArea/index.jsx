import React from 'react';
import Store from '../Store';
import ChildList from './ChildList';
import OtherList from './OtherList';

const MainListArea = () => (
  <Store.Consumer>
    {todo => (
      <ul>
        <OtherList />
        {todo.data.map(item => <ChildList key={`list-${item.id}`} title={item.title}/>)}
      </ul>
    )}
  </Store.Consumer>
)

export default MainListArea;
