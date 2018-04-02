import React from 'react';
import withTheme from '../../utils/withTheme';

const OtherList = ({store}) => (
  <li onClick={store.add}>other list</li>
)

export default withTheme(OtherList);