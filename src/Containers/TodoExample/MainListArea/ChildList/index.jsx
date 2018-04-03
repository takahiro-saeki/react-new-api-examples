import React from 'react';
import Store from '../../Store';
import { CheckArea, DeleteArea } from './style';

const ChildList = ({title}) => (
  <Store.Consumer>
    {todo => (
      <li onClick={todo.add}>
        <CheckArea>check</CheckArea>
        <span>{title}</span>
        <DeleteArea>delete</DeleteArea>
      </li>
    )}
  </Store.Consumer>
)

export default ChildList;