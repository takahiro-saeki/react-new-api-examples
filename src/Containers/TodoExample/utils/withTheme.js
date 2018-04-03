import React from 'react';
import Store from '../Store';
/*
const data = {
  title: 'title param',
  id: 1,
  arr: []
}

const testFunc = (callback) => {
  console.log(callback(data))
  return 10
}

testFunc(data => Object.values(data))
*/

const withTheme = dispatch => Component => props => {
  return (
    <Store.Consumer>
      {store => <Component {...props} {...dispatch(store)} store={store} />}
    </Store.Consumer>
  )
}

export default withTheme;