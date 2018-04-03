import React from 'react';
import Store from '../../Store';
import { CheckArea, DeleteArea, Container } from './style';

const checkStyle = {
  textDecoration: 'line-through',
  color: '#CCC'
}

const ChildList = ({title, id, isChecked}) => (
  <Store.Consumer>
    {todo => (
      <Container>
        <CheckArea 
          onClick={() => todo.checkPost(id)}
        >check</CheckArea>
        <span style={isChecked ? checkStyle : {}}>{title}</span>
        <DeleteArea onClick={() => todo.deletePost(id)}>delete</DeleteArea>
      </Container>
    )}
  </Store.Consumer>
)

export default ChildList;