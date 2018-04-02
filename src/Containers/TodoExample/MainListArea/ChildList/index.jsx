import React from 'react';
import Store from '../../Store';

const ChildList = ({title}) => (
  <Store.Consumer>
    {todo => (
      <li onClick={todo.add}>{title}</li>
    )}
  </Store.Consumer>
)

export default ChildList;