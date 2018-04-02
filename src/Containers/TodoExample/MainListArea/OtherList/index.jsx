import React from 'react';
import withTheme from '../../utils/withTheme';

const OtherList = ({store, param}) => (
  <li onClick={store.add}>other list: {param}</li>
)

export default withTheme({param: 'test!'})(OtherList);