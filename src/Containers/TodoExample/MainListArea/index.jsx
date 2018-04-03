import React from 'react';
import Store from '../Store';
import ChildList from './ChildList';
import OtherList from './OtherList';
import InputForm from './InputForm';

const MainListArea = () => (
  <Store.Consumer>
    {todo => (
      <ul>
        <InputForm />
        <OtherList />
        {todo.data.map(item => <ChildList key={`list-${item.id}`} title={item.title}/>)}
      </ul>
    )}
  </Store.Consumer>
)

export default MainListArea;
