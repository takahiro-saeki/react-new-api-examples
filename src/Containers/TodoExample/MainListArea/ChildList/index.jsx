import React from 'react';
import Store from '../../Store';
import { CheckArea, DeleteArea, Container } from './style';

const ChildList = ({title, id}) => (
  <Store.Consumer>
    {todo => (
      <Container>
        <CheckArea>check</CheckArea>
        <span>{title}</span>
        <DeleteArea onClick={() => todo.deletePost(id)}>delete</DeleteArea>
      </Container>
    )}
  </Store.Consumer>
)

export default ChildList;