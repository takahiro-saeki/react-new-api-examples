import React from 'react';
import Store from '../Store';

const withTheme = dispatch => Component => props => {
  console.log('dispatch', dispatch)
  return (
    <Store.Consumer>
      {store => <Component {...props} {...dispatch} store={store} />}
    </Store.Consumer>
  )
}

export default withTheme;