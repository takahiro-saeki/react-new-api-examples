import React from 'react';
import withTheme from '../../utils/withTheme';

const OtherList = ({store, param, second}) => (
  <li onClick={store.add}>other list: {param}/ second data is {second}</li>
)

const mapStateToProps = state => {
  return {
    second: 'second!'
  }
}

export default withTheme(mapStateToProps)(OtherList);